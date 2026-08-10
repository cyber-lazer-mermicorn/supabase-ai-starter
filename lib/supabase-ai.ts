import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 1. Store document with embedding
export async function storeDocument(content: string, metadata: any = {}) {
  const embedding = await generateEmbedding(content);
  const { data, error } = await supabase
    .from('documents')
    .insert({ content, embedding, metadata })
    .select()
    .single();
  if (error) throw error;
  return data;
}

// 2. Semantic search
export async function semanticSearch(query: string, limit = 5) {
  const embedding = await generateEmbedding(query);
  const { data, error } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_threshold: 0.7,
    match_count: limit,
  });
  if (error) throw error;
  return data;
}

// 3. RAG query
export async function ragQuery(question: string) {
  const docs = await semanticSearch(question, 3);
  const context = docs.map((d: any) => d.content).join('\n\n');
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      { role: 'system', content: `Answer based on this context:\n${context}` },
      { role: 'user', content: question },
    ],
  });
  return response.choices[0].message.content;
}

// 4. Generate embedding
async function generateEmbedding(text: string) {
  const res = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return res.data[0].embedding;
}

// 5. SQL setup (run once)
export const SETUP_SQL = `
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  embedding VECTOR(1536),
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops);

CREATE OR REPLACE FUNCTION match_documents(
  query_embedding VECTOR(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id UUID,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) AS similarity
  FROM documents
  WHERE 1 - (documents.embedding <=> query_embedding) > match_threshold
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;
`;
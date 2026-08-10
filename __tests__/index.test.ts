import { storeDocument } from '../lib/supabase-ai';

describe('storeDocument', () => {
  it('should be defined', () => {
    expect(storeDocument).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof storeDocument).toBe('function');
  });
});

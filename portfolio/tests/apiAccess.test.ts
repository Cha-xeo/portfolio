describe('API Tests', () => {
    it('should access the secret API key', () => {
      const apiKey = process.env.SECRET_API_KEY;
      expect(apiKey).toBe('moby_GjKfllKJGOLmrL9MH3npslwdQ44'); 
    });
  });
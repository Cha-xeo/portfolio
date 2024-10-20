import {expect, describe, it} from '@jest/globals';
import { GET } from '../app/api/searchGames/route';
import { createMockGameWithTitle } from '@/utils/gameUtils';

// Mock the global fetch call
global.fetch = jest.fn();

describe('GET /api/searchGames', () => {
    it('should return an array of games when fetch is successful', async () => {
      const mockGames: Normal[] = [
        createMockGameWithTitle('Test Game 1', 1),
        createMockGameWithTitle('Test Game 2', 2)
      ];
      (fetch as jest.Mock).mockResolvedValue({
        json: jest.fn().mockResolvedValue({ games: mockGames }),
      });
      const mockRequest = new Request('http://localhost/api/searchGames?search=Test%20Game');


      // Call the API route handler
      const response = await GET(mockRequest);
      // Parse the response body
      const responseData = await response.json();


  
      expect(response.status).toBe(200);
      expect(responseData.games).toEqual(mockGames);
      expect(fetch).toHaveBeenCalledWith(`https://api.mobygames.com/v1/games?api_key=${process.env.SECRET_API_KEY}&format=normal&title=Test Game`);
    });

    it('should return an empty array when no games match the search term', async () => {
      const mockGames: Normal[] = [];
      (fetch as jest.Mock).mockResolvedValue({
        json: jest.fn().mockResolvedValue({ games: mockGames }),
      });
      const mockRequest = new Request('http://localhost/api/searchGames?search=Nonexistent%20Game');

      // Call the API route handler
      const response = await GET(mockRequest);
      // Parse the response body
      const responseData = await response.json();

      
      expect(response.status).toBe(200);
      expect(responseData).toEqual({"games": []});
    });

    it('should return a 500 error when fetch fails', async () => {
      // Mock fetch to throw an error
      (fetch as jest.Mock).mockRejectedValue(new Error('API Error'));
      const mockRequest = new Request('http://localhost/api/searchGames?search=Test%20Game');

      // Call the API route handler
      const response = await GET(mockRequest);
      // Parse the response body
      const responseData = await response.json();

      // Assert that the status is 500 and the error message is correct
      expect(response.status).toBe(500);
      expect(responseData).toEqual({ error: 'Failed to fetch games' });
  });
});
  
// __tests__/hello-api.test.ts
import {expect, describe, it} from '@jest/globals';
import { GET } from '../app/api/hello/route';

describe('GET /api/hello', () => {
  it('returns a 200 status and the correct message', async () => {
    const response = await GET();
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ message: 'Hello, API with TypeScript!' });
  });
});

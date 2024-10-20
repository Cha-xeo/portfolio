import { createMockGameWithTitle, createMockSampleCover, createMockSampleScreenShots } from "../utils/gameUtils";

describe('createMockGame utility function', () => {
    it('should return a valid Normal object when given a title', () => {
        const title = 'Test Game';
        const id = 1;


        const game = createMockGameWithTitle(title, id);


        expect(game).toEqual(expect.objectContaining({
            official_url: expect.stringContaining(`https://example.com/${title.toLowerCase().replace(/\s+/g, '-')}`),
            genres: expect.any(Array),
            description: `${title} is an amazing game that everyone should play!`,
            platforms: expect.any(Array),
            sample_cover: createMockSampleCover(),
            sample_screenshots: [createMockSampleScreenShots()],
            title: title,
            game_id: id
        }));
    });
});
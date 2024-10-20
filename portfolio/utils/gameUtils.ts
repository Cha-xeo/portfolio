
export function createMockGameWithTitle(title: string, id: number): Normal {
    return {
        game_id: id,
        official_url: `https://example.com/${title.toLowerCase().replace(/\s+/g, '-')}`,
        genres: ['Action'], // Default genres, can be made more dynamic if needed
        description: `${title} is an amazing game that everyone should play!`,
        platforms: ['PC', 'PS4'], // Default platforms
        sample_cover: createMockSampleCover(), // Mock image URL
        sample_screenshots: [createMockSampleScreenShots()],
        title: title,
    };
}

export function createMockSampleCover(): SampleCover {
    return {
        height: 256,
        image: 'https://example.com/sample-cover.jpg',
        platforms: ['PC air d aigle', 'Nintendor'],
        thumbnail_image: 'https://example.com/sample-cover/thumbnail_image.jpg',
        width: 256
    };
}

export function createMockSampleScreenShots(): SampleScreenshots {
    return {
        caption: 'PC air d aigle',
        height: 256,
        image: 'https://example.com/sample-screenshots.jpg',
        thumbnail_image: 'https://example.com/sample-screenshots/thumbnail_image.jpg',
        width: 256
    };
}
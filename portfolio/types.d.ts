
type Webglgames = {
    id: bigint;
    name: string;
    description: string;
    gameurl: string;
    webglgamesimages: Webglgamesimages[];
}
type Webglgamesimages = {
    id: bigint;
    url: string;
    game_id: bigint;
    game: Webglgames;
}

type Normal = {
    alternate_titles?: [];
    description?: string;
    game_id: number;
    genres: [];
    moby_score?: string;
    moby_url?: string;
    num_votes?: number;
    official_url: string;
    platforms?: [];
    sample_cover?: SampleCover;
    sample_screenshots?: [];
    title: string;
}

type SampleCover = {
    height: number;
    image?: string;
    platforms: string[];
    thumbnail_image: string;
    width: number;
}

type NormalGamesResponse = {
    games: Normal[];  // Array of normal games objects
}
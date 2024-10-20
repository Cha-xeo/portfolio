
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
    alternate_titles?: [string];
    description?: string;
    game_id: number;
    genres: string[];
    moby_score?: string;
    moby_url?: string;
    num_votes?: number;
    official_url: string;
    platforms?: string[];
    sample_cover?: SampleCover;
    sample_screenshots?: SampleScreenshots[];
    title: string;
}

type Brief = {
    game_id: number;
    moby_url?: string;
    title: string;
}

type Id = {
    game_id: number;
}

type SampleCover = {
    height: number;
    image?: string;
    platforms: string[];
    thumbnail_image: string;
    width: number;
}
type SampleScreenshots = {
    caption: string;
    height: number;
    image?: string;
    thumbnail_image?: string;
    width: number;
}

type NormalGamesResponse = {
    games: Normal[];  // Array of Normal games objects
}
type BriefGamesResponse = {
    games: Brief[];  // Array of Brief games objects
}
type IdGamesResponse = {
    games: Id[];  // Array of Id games objects
}

type FormMessage = {
    isValid: boolean;
    message: string;
}
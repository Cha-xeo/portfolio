
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
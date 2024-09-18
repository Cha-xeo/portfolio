import { useEffect } from 'react';
import { MobyGameList } from '../components/MobyGameList';
import { error } from 'console';

const url: string = "https://api.mobygames.com/v1/";

function constructURL(endpoint: string, searchQuery: string = ""): string{
  const params:URLSearchParams = new URLSearchParams({
    api_key: process.env.SECRET_API_KEY ?? "",
    format: searchQuery,
  });
  console.log(params.toString());
  return `${url}/${endpoint}?${params.toString()}`;
}

async function fetchRecentGames(): Promise<Normal[]>  {
  try {

    const url: string = constructURL('games/recent', 'normal');
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: NormalGamesResponse = await response.json();
    // data.games.forEach( (game) => {
    //   console.log(game?.game_id);
    //   console.log(game.sample_cover?.image ?? "No sample cover found");
    // })
    
    return data.games;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

export default async function Page() {
  const games: Normal[] = await fetchRecentGames();
  // games.forEach(game  => {
    // console.log(game.game_id);
    // console.log(game.sample_cover.image);
  // });
  return (
    <>
      <MobyGameList games={games} /> 
    </>
  );
}
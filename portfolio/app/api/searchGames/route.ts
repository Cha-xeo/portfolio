// app/api/searchGames/route.ts

import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
}
// const url: string = "https://api.mobygames.com/v1/";

// async function fetchGamesBySearchTerm(searchTerm: string) {
//   const apiKey = process.env.SECRET_API_KEY ?? "";
//   const response = await fetch(`${url}games?api_key=${apiKey}&format=normal&title=${searchTerm}`);
//   const data: NormalGamesResponse = await response.json();
//   return data.games; // return NormalGamesResponse
// };

// async function fetchRecentGames(): Promise<Normal[]>  {
//   try {
//     const apiKey = process.env.SECRET_API_KEY ?? "";
//     const response = await fetch(`${url}games/recent?api_key=${apiKey}&format=normal`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data: NormalGamesResponse = await response.json();
//     // data.games.forEach( (game) => {
//     //   console.log(game?.game_id);
//     //   console.log(game.sample_cover?.image ?? "No sample cover found");
//     // })
    
//     return data.games;
//   } catch (error) {
//     console.error('Error fetching games:', error);
//     const aled: Normal[] = [];
//     return aled;
//   }
// };

// export async function fetchGamesById(id: number) {
//   const apiKey = process.env.SECRET_API_KEY ?? "";
//   const response = await fetch(`${url}games?api_key=${apiKey}&format=normal&id=${id}`);
//   const data: NormalGamesResponse = await response.json();
//   return data.games[0]; // return NormalGamesResponse
// };

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   console.log(searchParams);
//   const search = searchParams.get('search');

//   if (!search || typeof search !== 'string') {
//     try {
//       const games = await fetchRecentGames();
//       return NextResponse.json({ games });
//     } catch (error) {
//       console.error('Error fetching games:', error);
//       return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
//     }
//   }

//   try {
//     const games = await fetchGamesBySearchTerm(search);
//     return NextResponse.json({ games });
//   } catch (error) {
//     console.error('Error fetching games:', error);
//     return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
//   }
// }
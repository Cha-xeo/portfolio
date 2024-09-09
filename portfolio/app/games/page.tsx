import WebglgamesRepository from '@/repositories/prisma/WebglgamesRepository';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
const db = new PrismaClient()

async function getGames(){
  try {
    const repo = new WebglgamesRepository();
    const games = repo.getAll({
      include: {
        webglgamesimages: true,
      }
    });
    return games;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const games = await getGames();
  // const re = await fetch ('https://api.github.com/repos/vercel/next.js');
  // console.log(re);
  // const data = await re.json();
  // console.log(data);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {games.map( (game) => (
          <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={game.webglgamesimages.at(0)?.url} alt={game.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">{game.name}</h2>
            <p className="text-gray-600 mb-4">{game.description}</p>
            <Link href={{
                  pathname: `/games/${game.id}`, // Will match `/users/some-slug` path
              }}>
              <button className="bg-blue-500 text-white rounded px-4 py-2" >
                Play the game
              </button>
            </Link>
          </div>
        </div>
      ))};
      </div>
    </div>
  );
};

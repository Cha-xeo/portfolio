import WebglgamesRepository from '@/repositories/prisma/WebglgamesRepository';
import { PrismaClient, webglgames } from '@prisma/client';
import GameCard from '../components/GameCard';
import { useTranslations } from 'next-intl';
import MyGames from '../components/MyGames';
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

  return (
    <div>
      <MyGames games={games}/>
    </div>
  );
};

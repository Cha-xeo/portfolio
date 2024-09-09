import WebglgamesRepository from '@/repositories/prisma/WebglgamesRepository';
import { notFound } from 'next/navigation';


async function getGame(id: number){
    try {
      const repo = new WebglgamesRepository();
      const game = repo.getById(id, {
        include: {
          webglgamesimages: false,
        }
      });
      return game;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export default async function Page({ params }: { params: { id: number } }) {
    const game = await getGame(params.id);
    
    if (!game){
        return notFound();
    }
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">{game?.name}</h1>
        <div className="w-full max-w-4xl">
        <iframe
            className="w-full aspect-video"
            src={game.gameurl}
            width="100%"
            height="100%"
            allowFullScreen
        ></iframe>
        </div>
    </div>
  )
  }
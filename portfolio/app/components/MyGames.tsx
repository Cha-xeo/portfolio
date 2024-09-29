import GameCard from "./GameCard";
import { useTranslations } from "next-intl";

export default function MyGames({games}: {games: Webglgames[]}) {
    const t = useTranslations('games');
    return (
      <div className='min-h-screen'>
        <h1 className="font-extrabold text-xl sm:text-4xl italic m-26 text-center">{t('title')}</h1>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {games.map( (game) => (
                <GameCard game={game}/>
              ))};
          </div>
        </div>
      </div>
    );
  };
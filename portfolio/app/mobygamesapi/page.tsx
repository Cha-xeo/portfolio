import MobyGameSearch from '../components/mobyGames/MobyGameSearch';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('mobygames');
  
  return (
    <div className='bg-white rounded-lg'>
      <section id='RecentGames' className='min-h-screen'>
        <h1 className='font-extrabold text-xl sm:text-4xl italic m-26 text-center'>{t('title')}</h1>
        <MobyGameSearch  />
      </section>
      <footer className="sticky bottom-0 bg-gray-800 text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center text-lg">
            {t('data')} <a className="text-cyan-400" href="https://www.mobygames.com/"> MobyGames</a>.
          </div>
        </div>
      </footer>
    </div>
  );
}
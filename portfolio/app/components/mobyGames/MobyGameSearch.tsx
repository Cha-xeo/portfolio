'use client';
import { useState, useEffect } from 'react';
import { MobyGameList } from './MobyGameList';
import { useTranslations } from 'next-intl';

// export default function MobyGameSearch({ games }: NormalGamesResponse) {
export default function MobyGameSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredGames, setFilteredGames] = useState<Normal[]>([]); // Initial games
    const [isLoading, setIsLoading] = useState(false);
    const t = useTranslations('mobygames');

    useEffect(() => {
        async function fetchGames() {
            const response = await fetch(`/api/searchGames?search=`);
            const data = await response.json();
            setFilteredGames(data.games);
        }
        fetchGames();
    }, [])

    // Function to fetch games from API based on search term
    async function  handleSubmit (formData: FormData) {
        setIsLoading(true);
        try {
            setSearchTerm(formData.get("search")?.toString() ?? "");
            const response = await fetch(`/api/searchGames?search=${formData.get("search")}`);
            const data = await response.json();
            setFilteredGames(data.games);
        } catch (error) {
            console.error('Failed to fetch games:', error);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* Search bar input */}
            <form action={handleSubmit} className='p-8 max-w-md w-full'>   
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{t('form.label')}</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" name="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t('form.placeholder')}/>
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t('form.button')}</button>
                </div>
            </form>


        
            {/* Loading indicator */}
            {isLoading && <p>{t('form.loading')}</p>}
        
            {/* Render filtered games */}
            {filteredGames?.length > 0 ? 
            <MobyGameList games={filteredGames} />
            :
            <div>
                {t('form.error_no_game')} {searchTerm}
            </div>
            }
        </div>
    );
}
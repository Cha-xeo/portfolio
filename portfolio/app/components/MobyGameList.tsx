// app/users/MobyGameList.tsx (Client Component)
'use client';  // This directive marks the component as a Client Component

import React from 'react';
import DOMPurify from 'isomorphic-dompurify'; // For sanitizing HTML
import Link from 'next/link'
import Image from 'next/image';

export const MobyGameList: React.FC<NormalGamesResponse> = ({ games }) => {
  return (
    <>
        <h1 className='font-extrabold bg-gray-100 text-xl sm:text-6xl italic m-26 text-center'>Recent</h1>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {games.map((game: Normal) => (
                    <div key={game.game_id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <a href={game.moby_url}>
                            <Image
                                src={game.sample_cover?.image ?? ""}
                                width={game.sample_cover?.width}
                                height={game.sample_cover?.height}
                                alt={game.title}
                                className="w-full h-48 object-fit"
                            />
                        </a>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-4">{game.title}</h2>
                                <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(game.description ?? "") }}>
                                </p>
                            <Link href={{
                                pathname: `${game.moby_url}`,
                            }}>
                                <button className="bg-blue-500 text-white rounded px-4 py-2">
                                    Moby link
                                </button>
                            </Link>
                        </div>
                    </div>
                ))};
            </div>
        </div>
      </>
  );
};
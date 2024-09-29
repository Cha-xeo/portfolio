// app/users/MobyGameList.tsx (Client Component)
'use client';  // This directive marks the component as a Client Component

import React from 'react';
import { useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify'; // For sanitizing HTML
import Link from 'next/link'
import Image from 'next/image';
import GameDescription from './GameDescription';

export const MobyGameList: React.FC<NormalGamesResponse> = ({ games }) => {
  return (
    <div className="container mx-auto bg-gray-100 flex items-center justify-center">
        <div className="max-h-screen overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-8">
            {games.map((game: Normal) => (
                <div key={game.game_id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="pt-5 pb-5 bg-blue-100 rounded-lg shadow-lg overflow-hidden">
                        <a href={game.moby_url}>
                            <Image
                                src={game.sample_cover?.image ?? ""}
                                width={game.sample_cover?.width ?? 256}
                                height={game.sample_cover?.height ?? 196}
                                alt={game.title}
                                className="w-full h-48 object-contain"
                            />
                        </a>
                    </div>
                    {/* <div className=" rounded-lg shadow-lg overflow-hidden">
                    </div> */}
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">{game.title}</h2>
                            {/* <GameDescription description={game.description ?? ""}/> */}
                            {/* <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(game.description ?? "") }}></p> */}
                        <Link href={{
                            pathname: `${game.moby_url}`,
                        }}>
                            <button className="bg-blue-500 text-white rounded px-4 py-2">
                                Moby link
                            </button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    </div>
  );
};
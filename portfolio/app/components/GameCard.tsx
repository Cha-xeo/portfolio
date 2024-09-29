'use client'

import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"

export default function GameCard({game}: {game: Webglgames}) {
    const t = useTranslations('games.game');

    return (
        <div key={game.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
                src={game.webglgamesimages.at(0)?.url ?? ""}
                width={150}
                height={150}
                alt={game.name} className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{game.name}</h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <Link href={{
                        pathname: `/games/${game.id}`, // Will match `/users/some-slug` path
                    }}>
                    <button className="bg-blue-500 text-white rounded px-4 py-2" >
                        {t('play_button')}
                    </button>
                </Link>
            </div>
        </div>
    )
}
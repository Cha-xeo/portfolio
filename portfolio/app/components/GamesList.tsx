import Link from 'next/link'

export default function GamesList( {games} : {games:any} ) {
    return (
      <ul>
        {games.map(({game} : {game:any}) => (
          <li key={game.id}>
            <Link href={`/game/${game.slug}`}>{game.title}</Link>
          </li>
        ))}
      </ul>
    )
  }
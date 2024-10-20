import { fetchGamesById } from "@/app/api/searchGames/route";
import MobyGameDetails from "@/app/components/mobyGames/MobyGameDetails";

export default async function Page({ params }: { params: { id: number } }) {
    const game = await fetchGamesById(params.id)
    return(
        <div>
            {/* <MobyGameDetails game={game}/> */}
        </div>
    )
}
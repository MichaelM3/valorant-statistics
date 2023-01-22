import { Act, Player } from "../interfaces"
import { fetchLeaderboardData, fetchValContent } from "../lib/fetchValContent"
import Leaderboard from "./Leaderboard"

const Homepage = async () => {
    const acts: Act[] = await fetchValContent()
    const currentAct = acts.find((act: Act) => (act.type === "act") && (act.isActive === true))
    const playerArr: unknown = await fetchLeaderboardData(currentAct?.id)

    function isPlayerArr(players: unknown): players is Player[] {
        if (players) {
            return true
        }
        return false
    }

    return (
        <main className='text-white'>
            {currentAct && isPlayerArr(playerArr) ?
                <Leaderboard playerArr={playerArr} currentAct={currentAct} />
                :
                null
            }
        </main>
    )
}

export default Homepage

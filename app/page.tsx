import { Act, Player } from "../interfaces"
import { fetchLeaderboardData, fetchValContent } from "../lib/fetchValContent"
import Leaderboard from "./Leaderboard"

const Homepage = async () => {
    const acts: unknown = await fetchValContent()
    if (!isActs(acts)) {
        return <div><h1>LEADERBOARD DATA IS DOWN</h1></div>
    }

    const currentAct: Act = acts.find((act: Act) => (act.type === "act") && (act.isActive === true)) as Act
    const players: unknown = await fetchLeaderboardData(currentAct.id)

    function isActs(acts: unknown): acts is Act[] {
        if (acts) return true
        return false
    }

    function isPlayers(players: unknown): players is Player[] {
        if (players) return true
        return false
    }

    return (
        <main className='text-white p-12'>
            {isPlayers(players) ?
                <Leaderboard players={players} currentAct={currentAct} />
                :
                null
            }
        </main>
    )
}

export default Homepage

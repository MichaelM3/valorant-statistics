import { Act, Player } from "../interfaces"
import { fetchLeaderboardData, fetchValContent } from "../lib/fetchValContent"
import Leaderboard from "./leaderboard"

const Homepage = async () => {
    const acts: unknown = await fetchValContent()
    if (!isActs(acts)) {
        return <div><h1>LEADERBOARD DATA IS DOWN</h1></div>
    }

    const currentAct: Act = acts.find((act: Act) => (act.type === "act") && (act.isActive === true)) as Act
    const currentEpisode: Act = acts.find((act: Act) => (act.type === "episode") && (act.isActive === true)) as Act
    const players: unknown = await fetchLeaderboardData(currentAct.id)

    function isActs(acts: unknown): acts is Act[] {
        return Array.isArray(acts) && acts.length > 0
    }

    function isPlayers(players: unknown): players is Player[] {
        return Array.isArray(players) && players.length > 0
    }

    return (
        <main className='text-white p-12'>
            {isPlayers(players) ?
                <Leaderboard lastPage={Math.ceil(players.length/9)} players={players} actName={currentAct.name} episodeName={currentEpisode.name} />
                :
                null
            }
        </main>
    )
}

export default Homepage

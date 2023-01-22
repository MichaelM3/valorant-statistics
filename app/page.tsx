import { Act } from "../interfaces"
import { fetchValContent } from "../lib/fetchValContent"
import Leaderboard from "./Leaderboard"

const Homepage = async () => {
    const acts: Act[] = await fetchValContent()
    const currentAct = acts.find((act: Act) => (act.type === "act") && (act.isActive === true))

    return (
        <main className='text-white'>
            {currentAct ?
                <Leaderboard currentAct={currentAct} />
                :
                null
            }
        </main>
    )
}

export default Homepage

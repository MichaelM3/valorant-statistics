import { Act, Player } from "../interfaces"

const BASE_URL = "https://na.api.riotgames.com/val/"

export const fetchValContent = async (): Promise<Act[]> => {
    const res = await fetch(`${BASE_URL}content/v1/contents?locale=en-US&api_key=${process.env.API_KEY}`)

    if (!res) {
        throw new Error("Fetch request failed")
    }
    const { acts } = await res.json()

    return acts as Act[]
}

export const fetchLeaderboardData = async (actId: string | undefined): Promise<Player[] | null> => {
    if (actId) {
        const res = await fetch(`${BASE_URL}ranked/v1/leaderboards/by-act/${actId}?size=200&startIndex=0&api_key=${process.env.API_KEY}`)
        if (!res) {
            throw new Error("Fetch request failed")
        }
        const { players } = await res.json()

        return players as Player[]
    }
    return null
}

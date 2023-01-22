import { Act } from "../interfaces"


export const fetchValContent = async (): Promise<Act[]> => {
    const url = "https://na.api.riotgames.com/val/content/v1/contents?locale=en-US&api_key=" + process.env.API_KEY
    
    const res = await fetch(url)
    if (!res) {
        throw new Error("Fetch request failed")
    }
    const { acts } = await res.json()
    
    return acts as Act[]
}

// export const fetchLeaderboardData = async (): Promise<void> => {
//
// }

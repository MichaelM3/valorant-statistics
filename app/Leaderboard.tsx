'use client'

import { LeaderboardProps, Player } from "../interfaces"
import PlayerCard from "./PlayerCard"

const Leaderboard = ({ currentAct, playerArr }: LeaderboardProps) => {

    const displayPlayerCard = playerArr.map((player: Player) => {
        return <PlayerCard key={player.puuid} {...player} />
    })

    return (
        <div>
           {displayPlayerCard} 
        </div>
    )
}

export default Leaderboard

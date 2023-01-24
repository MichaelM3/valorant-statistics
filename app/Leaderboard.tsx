'use client'

import Image from "next/image"
import { LeaderboardProps, Player } from "../interfaces"
import PlayerCard from "./PlayerCard"

const Leaderboard = ({ actName, episodeName, players }: LeaderboardProps) => {

    const displayPlayerCard = players.map((player: Player) => {
        return <PlayerCard
            key={player.puuid}
            gameName={player.gameName}
            tagLine={player.tagLine}
            rankedRating={player.rankedRating}
            leaderboardRank={player.leaderboardRank}
            numberOfWins={player.numberOfWins}
        />
    })

    return (
        <div>
            <div className="flex justify-between items-center w-full bg-slate-400 h-[100px] mb-8">
                <span className="border-r p-4 h-full">
                    <Image
                        src="https://playvalorant.com/assets/images/leaderboards/radiant-badge.png"
                        alt="Radiant Badge"
                        width={50}
                        height={50}
                    />
                </span>
                <span className="text-center">
                    <h3 className="text-sm font-bold">Leaderboard</h3>
                    <h1 className="text-2xl font-extrabold">RADIANT</h1>
                </span>
                <span className="border-l p-6 text-center h-full">
                    <h5 className="text-sm font-medium">{episodeName}</h5>
                    <h3 className="text-l font-bold">{actName}</h3>
                </span>
            </div>
            <span className="flex">
                <h4 className="ml-4 font-semibold text-slate-400">RANK</h4>
                <h4 className="ml-12 font-semibold text-slate-400">RATING</h4>
            </span>
            <div className="flex flex-col items-center bg-slate-600">
                <div className="flex flex-col w-full">
                    {displayPlayerCard}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard

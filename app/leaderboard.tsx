'use client'

import { MouseEvent, useState } from 'react'
import Image from "next/image"
import { LeaderboardProps, Player } from "../interfaces"
import PlayerCard from "./playerCard"
import PaginationControls from './paginationControls'

const Leaderboard = ({ actName, episodeName, players }: LeaderboardProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const startIndex = (currentPage - 1) * 9 // 10 players per page
    const endIndex = startIndex + 9
    const currentPlayers = players.slice(startIndex, endIndex)

    const displayPlayerCard = currentPlayers.map((player: Player) => {
        return <PlayerCard
            key={player.puuid}
            gameName={player.gameName}
            tagLine={player.tagLine}
            rankedRating={player.rankedRating}
            leaderboardRank={player.leaderboardRank}
            numberOfWins={player.numberOfWins}
        />
    })

    const handleClick = (counter: number) => {
        const calculatedPage: number = currentPage + counter
        if (calculatedPage > 0 && calculatedPage < Math.ceil(players.length / 9) + 1) {
            setCurrentPage(currentPage + counter)
        }
    }

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
            <PaginationControls maxPlayers={players.length} currentPage={currentPage} handleClick={handleClick} />
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

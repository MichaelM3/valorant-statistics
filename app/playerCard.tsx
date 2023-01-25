import { Player } from "../interfaces"
import Image from "next/image"

const PlayerCard = ({
    gameName,
    tagLine,
    leaderboardRank,
    rankedRating,
    numberOfWins,
}: Player) => {
    return (
        <div className="flex justify-between my-0.5 bg-sky-900">
            <div className="flex items-center">
                <span className="flex p-4 items-center space-x-4 px-8 bg-gray-700">
                    <h2>{leaderboardRank}</h2>
                    <Image
                        src="https://playvalorant.com/assets/images/leaderboards/radiant-badge.png"
                        alt="Radiant Badge"
                        width={25}
                        height={25}
                    />
                </span>
                <span className="ml-12 text-center">
                    <p>{rankedRating}</p>
                </span>
            </div>
            <span className="flex items-center">
                <h3 className="text-2xl font-extrabold">
                    {gameName}
                    <span className="text-sm text-gray-400 font-bold">#{tagLine}</span>
                </h3>
            </span>
            <span className="text-center p-2">
                <p>{numberOfWins}</p>
                <h4>GAMES WON</h4>
            </span>
        </div>

    )
}

export default PlayerCard

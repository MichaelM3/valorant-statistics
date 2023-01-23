import { Player } from "../interfaces"

const PlayerCard = ({
    puuid,
    gameName,
    tagLine,
    leaderboardRank,
    rankedRating,
    numberOfWins,
    competitiveTier
}: Player) => {
    return (
        <div className="flex justify-between my-0.5 bg-sky-900">
            <div className="flex items-center">
                <span className="px-8">
                    <h2>{leaderboardRank}</h2>
                </span>
                <span className="ml-12 text-center">
                    <p>{rankedRating}</p>
                </span>
            </div>
            <span  className="flex items-center">
                <h3>
                    {gameName}
                    <span>#{tagLine}</span>
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

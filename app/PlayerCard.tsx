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
        <div className="flex justify-between">
            <div className="flex">
                <span className="px-4">
                    <h2>{leaderboardRank}</h2>
                </span>
                <span>
                    <p>{rankedRating}</p>
                </span>
            </div>
            <span>
                <h3>
                    {gameName}
                    <span>#{tagLine}</span>
                </h3>
            </span>
        </div>

    )
}

export default PlayerCard

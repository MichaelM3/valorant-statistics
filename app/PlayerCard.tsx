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
        <div className="flex justify-around">
            <h3>{gameName}</h3>
            <span>{leaderboardRank}</span>
            <span>{rankedRating}</span>
        </div>

    )
}

export default PlayerCard

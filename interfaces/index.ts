export interface Act {
    id: string;
    parentId: string;
    type: string;
    name: string;
    isActive: boolean;
}

export interface Player {
    puuid?: string;
    gameName: string;
    tagLine: string;
    leaderboardRank: number;
    rankedRating: number;
    numberOfWins: number;
    competitiveTier?: number;
}

export interface LeaderboardProps {
    actName: string;
    episodeName: string;
    players: Player[];
    lastPage: number;
}

export interface PaginationControlsProps {
    handleClick: (counter: number) => void;
    currentPage: number;
    lastPage: number;
}

export interface Act {
    id: string;
    parentId: string;
    type: string;
    name: string;
    isActive: boolean;
}

export interface LeaderboardProps {
    currentAct: Act;
}

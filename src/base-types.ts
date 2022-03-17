export interface UserType {
    id: number;
    name: string;
    balance: number;
}

export interface BetType {
    id: number;
    userId: number;
    betAmount: number;
    chance: number;
    payout: number;
    win: boolean;
}

import { Field, Int, Float, ObjectType } from 'type-graphql';
import User from './User';

@ObjectType()
export default class Bet {
    @Field(type => Int)
    id: number;

    @Field(type => Int)
    userId: number;

    @Field(type => Float)
    betAmount: number;

    @Field(type => Float)
    chance: number;

    @Field(type => Float)
    payout: number;

    @Field(type => Boolean)
    win: boolean;

    @Field(type => [User])
    users: User[];
}

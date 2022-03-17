import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import Bet from '../schemas/Bet';
import BetModel from '../db/models/Bet';
import UserModel from '../db/models/User';
import sequelize, { Op } from '@sequelize/core';

@Resolver(of => Bet)
export default class {

    @Query(returns => Bet, { nullable: true, description: 'Get all bets list' })
    async getBetList() {
        return await BetModel.findAll();
    }

    @Query(returns => Bet, { nullable: true, description: 'Get single bet by ID' })
    async getBet(@Arg('id') id: number) {
        return await BetModel.findByPk(id);
    }

    @Query(returns => Bet, { nullable: true, description: 'Get best paid out bets made by users' })
    async getBestBetPerUser(@Arg('limit') limit: number) {

        return await BetModel.findAll({
            include: [{
                model: UserModel,
                as: 'User'
            }],
            attributes: [ [sequelize.fn('MAX', sequelize.col('payout')), 'maxPayout'] ],
            where: sequelize.literal('`Bet.maxPayout` > 7'),
            offset: 0,
            limit
        });

    }

    @Mutation(returns => Bet, { description: 'Create a new bet by providing userId / betAmound / chance (float, < 1)' })
    async createBet(
        @Arg('userId') userId: number,
        @Arg('betAmount') betAmount: number,
        @Arg('chance') chance: number
    ) {

        const win = Math.random() < chance;

        return await BetModel.create({
            userId,
            betAmount,
            chance,
            payout: win ? betAmount * 2 : 0,
            win
        });

    }

}

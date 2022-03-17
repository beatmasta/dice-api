import { Arg, Query, Resolver } from 'type-graphql';
import User from '../schemas/User';
import UserModel from '../db/models/User';

@Resolver(of => User)
export default class {

    @Query(returns => User, { nullable: true, description: 'Get single user by ID' })
    async getUser(@Arg('id') id: number) {
        return await UserModel.findByPk(id);
    }

}

import { Field, Int, Float, ObjectType } from 'type-graphql';

@ObjectType()
export default class User {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field(type => Float)
    balance: number;
}

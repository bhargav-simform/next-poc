import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Issue {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field({ defaultValue: 'Low' })
  priority: string;

  @Field()
  assignee: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  due_date: Date;

  @Field(() => GraphQLISODateTime)
  created_at: Date;

  @Field(() => GraphQLISODateTime)
  updated_at: Date;

  @Field()
  browser: string;

  @Field({ defaultValue: true })
  reproducible: boolean;

  @Field()
  estimation: number;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';

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

  @Field()
  due_date: Date;

  @Field()
  severity: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  browser: string;

  @Field({ defaultValue: true })
  reproachable: boolean;

  @Field()
  estimation: number;
}

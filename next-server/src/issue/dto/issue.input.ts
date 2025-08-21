import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
 
@InputType()
export class CreateIssueInput {
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

  @Field(() => Date, {
    nullable: true,
    description: 'Due Date',
  })
  due_date: Date;

  @Field()
  browser: string;

  @Field({ defaultValue: true })
  reproducible: boolean;

  @Field()
  estimation: number;
}

@InputType()
export class UpdateIssueInput {

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  priority?: string;

  @Field({ nullable: true })
  assignee?: string;

  @Field(() => Date, {
    nullable: true,
    description: 'Due Date',
  })
  due_date: Date;

  @Field({ nullable: true })
  browser?: string;

  @Field({ nullable: true })
  reproducible?: boolean;

  @Field({ nullable: true })
  estimation?: number;
}

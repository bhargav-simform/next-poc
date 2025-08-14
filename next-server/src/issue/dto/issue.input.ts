import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateIssueInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field()
  priority: string;
}

@InputType()
export class UpdateIssueInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  priority?: string;
}

import { InputType, Field } from '@nestjs/graphql';

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

  @Field({ nullable: true })
  assignee?: string;

  @Field({ nullable: true })
  due_date?: Date;

  @Field({ nullable: true })
  severity?: string;

  @Field({ nullable: true })
  created_date?: Date;

  @Field({ nullable: true })
  updated_date?: Date;

  @Field({ nullable: true })
  browser?: string;

  @Field({ nullable: true })
  reproachable?: boolean;

  @Field({ nullable: true })
  estimation?: number;
}

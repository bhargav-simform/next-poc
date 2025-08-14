import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IssueService } from './issue.service';
import { Issue } from './entities/issue.entity';
import { CreateIssueInput, UpdateIssueInput } from './dto/issue.input';

@Resolver(() => Issue)
export class IssueResolver {
  constructor(private readonly issueService: IssueService) {}

  @Query(() => [Issue])
  async issues(): Promise<Issue[]> {
    return this.issueService.findAll();
  }

  @Query(() => Issue)
  async issue(@Args('id') id: string): Promise<Issue> {
    return this.issueService.findOne(id);
  }

  @Mutation(() => Issue)
  async createIssue(
    @Args('createIssueInput') createIssueInput: CreateIssueInput,
  ): Promise<Issue> {
    return this.issueService.create(createIssueInput);
  }

  @Mutation(() => Issue)
  async updateIssue(
    @Args('id') id: string,
    @Args('updateIssueInput') updateIssueInput: UpdateIssueInput,
  ): Promise<Issue> {
    return this.issueService.update(id, updateIssueInput);
  }

  @Mutation(() => Boolean)
  async removeIssue(@Args('id') id: string): Promise<boolean> {
    return this.issueService.remove(id);
  }
}

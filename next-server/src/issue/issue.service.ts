import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { CreateIssueInput, UpdateIssueInput } from './dto/issue.input';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    this.supabase = createClient(
      configService.get<string>('SUPABASE_URL'),
      configService.get<string>('SUPABASE_KEY'),
    );
  }

  async findAll(): Promise<Issue[]> {
    const { data, error } = await this.supabase
      .from('issues')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data.map(issue => ({
      ...issue,
      due_date: issue.due_date ? new Date(issue.due_date) : null,
      created_at: new Date(issue.created_at),
      updated_at: new Date(issue.updated_at)
    }));
  }

  async findOne(id: string): Promise<Issue> {
    const { data, error } = await this.supabase
      .from('issues')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return {
      ...data,
      due_date: data.due_date ? new Date(data.due_date) : null,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    };
  }

  async create(createIssueInput: CreateIssueInput): Promise<Issue> {
    const { data, error } = await this.supabase
      .from('issues')
      .insert([{
        ...createIssueInput,
        due_date: createIssueInput.due_date ? new Date(createIssueInput.due_date).toISOString() : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) throw error;
    
    return {
      ...data,
      due_date: data.due_date ? new Date(data.due_date) : null,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    };
  }

  async update(id: string, updateIssueInput: UpdateIssueInput): Promise<Issue> {
    const { data, error } = await this.supabase
      .from('issues')
      .update({
        ...updateIssueInput,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;


    return {
      ...data,
      due_date: data.due_date ? new Date(data.due_date) : null,
      created_at: new Date(data.created_at),
      updated_at: new Date(data.updated_at)
    };
  }

  async remove(id: string): Promise<boolean> {
    const { error } = await this.supabase
      .from('issues')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  }
}

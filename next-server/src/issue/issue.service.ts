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
    return data;
  }

  async findOne(id: string): Promise<Issue> {
    const { data, error } = await this.supabase
      .from('issues')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  async create(createIssueInput: CreateIssueInput): Promise<Issue> {
    const { data, error } = await this.supabase
      .from('issues')
      .insert([{
        ...createIssueInput,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
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
    return data;
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

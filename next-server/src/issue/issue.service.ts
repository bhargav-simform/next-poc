import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';
import { CreateIssueInput, UpdateIssueInput } from './dto/issue.input';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {
  private supabase: SupabaseClient;
  private readonly logger = new Logger(IssueService.name);

  private readonly supabaseUrl = process.env.SUPABASE_URL!;
  private readonly supabaseKey = process.env.SUPABASE_KEY

  constructor(private configService: ConfigService) {


    console.log('supabaseUrl', this.supabaseUrl);

    if (!this.supabaseUrl || !this.supabaseKey) {
      throw new Error('Missing SUPABASE_URL or SUPABASE_KEY in environment variables');
    }

    // 🚨 Prevent accidental use of postgres:// connection string
    if (this.supabaseUrl.startsWith('postgres://') || this.supabaseUrl.startsWith('postgresql://')) {
      throw new Error(
        `Invalid SUPABASE_URL: expected https://<project>.supabase.co, but got "${this.supabaseUrl}".\n` +
        'Use SUPABASE_DB_URL for postgres:// connections.'
      );
    }

    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    this.logger.log(`Supabase client initialized with URL: ${this.supabaseUrl}`);
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

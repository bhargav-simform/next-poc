import { Issue } from '../generated/graphql';

export type Status = 'Open' | 'In Progress' | 'Resolved' | 'Closed';
export type Severity = 'Low' | 'Medium' | 'High';
export type Browser = 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Other';

export interface User {
  id: string;
  name: string;
  email: string;
}

export const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Mike Johnson', email: 'mike@example.com' },
  { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com' },
];

export type IssueFormData = Omit<Issue, 'id' | 'createdDate'>;

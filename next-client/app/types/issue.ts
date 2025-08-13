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

export interface Issue {
  id: string;
  title: string;
  description: string; // rich text HTML
  assignee: string;
  dueDate: string; // ISO string
  severity: Severity;
  browser: Browser | string;
  reproducible: boolean;
  estimation: number; // hours
  status: Status;
  createdDate: string;
}

export interface IssueFormData extends Omit<Issue, 'id' | 'createdDate'> {}

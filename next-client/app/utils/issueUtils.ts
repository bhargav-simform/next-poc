import { Status, Severity, mockUsers } from '../types/issue';

import { Issue } from '../generated/graphql';

export const getStatusColor = (status: Status): string => {
  switch (status) {
    case 'Open':
      return 'blue';
    case 'In Progress':
      return 'orange';
    case 'Resolved':
      return 'green';
    case 'Closed':
      return 'gray';
    default:
      return 'default';
  }
};

export const getSeverityColor = (severity: Severity): string => {
  switch (severity) {
    case 'High':
      return 'red';
    case 'Medium':
      return 'orange';
    case 'Low':
      return 'green';
    default:
      return 'default';
  }
};

export const getAssigneeName = (id: string) => {
  const user = mockUsers.find((u) => u.id === id);
  return user ? user.name : 'Unassigned';
};

export const generateCSVContent = (issues: Issue[]) => {
  return [
    ['ID', 'Title', 'Description', 'Status', 'Priority', 'Assignee', 'Created Date'],
    ...issues.map((issue) => [
      issue.id,
      issue.title,
      issue.description,
      issue.status,
      issue.priority,
      issue.assignee,
      issue.created_at,
    ]),
  ]
    .map((row) => row.join(','))
    .join('\n');
};

import { gql } from '@apollo/client';

export const GET_ISSUES = gql`
  query GetIssues {
    issues {
      id
      title
      description
      status
      priority
      assignee
      due_date
      severity
      created_at
      updated_at
      browser
      reproachable
      estimation
    }
  }
`;

export const CREATE_ISSUE = gql`
  mutation CreateIssue($createIssueInput: CreateIssueInput!) {
    createIssue(createIssueInput: $createIssueInput) {
      id
      title
      description
      status
      priority
      created_at
      updated_at
      browser
      reproachable
      estimation
      due_date
      severity
    }
  }
`;

export const UPDATE_ISSUE = gql`
  mutation UpdateIssue($id: String!, $updateIssueInput: UpdateIssueInput!) {
    updateIssue(id: $id, updateIssueInput: $updateIssueInput) {
      id
      title
      description
      status
      priority
      created_at
      updated_at
      browser
      reproachable
      estimation
      due_date
      severity
    }
  }
`;

export const DELETE_ISSUE = gql`
  mutation RemoveIssue($id: String!) {
    removeIssue(id: $id)
  }
`;

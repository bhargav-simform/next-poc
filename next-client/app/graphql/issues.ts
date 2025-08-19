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
      created_at
      updated_at
      browser
      reproducible
      estimation
    }
  }
`;

export const CREATE_ISSUE = gql`
  mutation CreateIssue($createIssueInput: CreateIssueInput!) {
    createIssue(createIssueInput: $createIssueInput) {
      title
      description
      status
      priority
      browser
      reproducible
      estimation
      due_date
    }
  }
`;

export const UPDATE_ISSUE = gql`
  mutation UpdateIssue($id: String!, $updateIssueInput: UpdateIssueInput!) {
    updateIssue(id: $id, updateIssueInput: $updateIssueInput) {
      title
      description
      status
      priority
      browser
      reproducible
      estimation
      due_date
    }
  }
`;

export const DELETE_ISSUE = gql`
  mutation RemoveIssue($id: String!) {
    removeIssue(id: $id)
  }
`;

import { gql } from '@apollo/client';

export const GET_ISSUES = gql`
  query GetIssues {
    issues {
      id
      title
      description
      status
      priority
      createdAt
      updatedAt
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
      createdAt
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
      updatedAt
    }
  }
`;

export const DELETE_ISSUE = gql`
  mutation RemoveIssue($id: String!) {
    removeIssue(id: $id)
  }
`;

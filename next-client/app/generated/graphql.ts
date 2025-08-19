import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateIssueInput = {
  assignee: Scalars['String']['input'];
  browser: Scalars['String']['input'];
  created_at: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  due_date: Scalars['DateTime']['input'];
  estimation: Scalars['Float']['input'];
  priority?: Scalars['String']['input'];
  reproachable?: Scalars['Boolean']['input'];
  severity: Scalars['String']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updated_at: Scalars['DateTime']['input'];
};

export type Issue = {
  __typename?: 'Issue';
  assignee: Scalars['String']['output'];
  browser: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  due_date: Scalars['DateTime']['output'];
  estimation: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  priority: Scalars['String']['output'];
  reproachable: Scalars['Boolean']['output'];
  severity: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createIssue: Issue;
  removeIssue: Scalars['Boolean']['output'];
  updateIssue: Issue;
};


export type MutationCreateIssueArgs = {
  createIssueInput: CreateIssueInput;
};


export type MutationRemoveIssueArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateIssueArgs = {
  id: Scalars['String']['input'];
  updateIssueInput: UpdateIssueInput;
};

export type Query = {
  __typename?: 'Query';
  issue: Issue;
  issues: Array<Issue>;
};


export type QueryIssueArgs = {
  id: Scalars['String']['input'];
};

export type UpdateIssueInput = {
  assignee?: InputMaybe<Scalars['String']['input']>;
  browser?: InputMaybe<Scalars['String']['input']>;
  created_date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  estimation?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  reproachable?: InputMaybe<Scalars['Boolean']['input']>;
  severity?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GetIssuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIssuesQuery = { __typename?: 'Query', issues: Array<{ __typename?: 'Issue', id: string, title: string, description: string, status: string, priority: string, assignee: string, due_date: any, severity: string, created_at: any, updated_at: any, browser: string, reproachable: boolean, estimation: number }> };

export type CreateIssueMutationVariables = Exact<{
  createIssueInput: CreateIssueInput;
}>;


export type CreateIssueMutation = { __typename?: 'Mutation', createIssue: { __typename?: 'Issue', id: string, title: string, description: string, status: string, priority: string, created_at: any, updated_at: any, browser: string, reproachable: boolean, estimation: number, due_date: any, severity: string } };

export type UpdateIssueMutationVariables = Exact<{
  id: Scalars['String']['input'];
  updateIssueInput: UpdateIssueInput;
}>;


export type UpdateIssueMutation = { __typename?: 'Mutation', updateIssue: { __typename?: 'Issue', id: string, title: string, description: string, status: string, priority: string, created_at: any, updated_at: any, browser: string, reproachable: boolean, estimation: number, due_date: any, severity: string } };

export type RemoveIssueMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveIssueMutation = { __typename?: 'Mutation', removeIssue: boolean };


export const GetIssuesDocument = gql`
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

/**
 * __useGetIssuesQuery__
 *
 * To run a query within a React component, call `useGetIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIssuesQuery(baseOptions?: Apollo.QueryHookOptions<GetIssuesQuery, GetIssuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssuesQuery, GetIssuesQueryVariables>(GetIssuesDocument, options);
      }
export function useGetIssuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssuesQuery, GetIssuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssuesQuery, GetIssuesQueryVariables>(GetIssuesDocument, options);
        }
export function useGetIssuesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssuesQuery, GetIssuesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssuesQuery, GetIssuesQueryVariables>(GetIssuesDocument, options);
        }
export type GetIssuesQueryHookResult = ReturnType<typeof useGetIssuesQuery>;
export type GetIssuesLazyQueryHookResult = ReturnType<typeof useGetIssuesLazyQuery>;
export type GetIssuesSuspenseQueryHookResult = ReturnType<typeof useGetIssuesSuspenseQuery>;
export type GetIssuesQueryResult = Apollo.QueryResult<GetIssuesQuery, GetIssuesQueryVariables>;
export const CreateIssueDocument = gql`
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
export type CreateIssueMutationFn = Apollo.MutationFunction<CreateIssueMutation, CreateIssueMutationVariables>;

/**
 * __useCreateIssueMutation__
 *
 * To run a mutation, you first call `useCreateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIssueMutation, { data, loading, error }] = useCreateIssueMutation({
 *   variables: {
 *      createIssueInput: // value for 'createIssueInput'
 *   },
 * });
 */
export function useCreateIssueMutation(baseOptions?: Apollo.MutationHookOptions<CreateIssueMutation, CreateIssueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIssueMutation, CreateIssueMutationVariables>(CreateIssueDocument, options);
      }
export type CreateIssueMutationHookResult = ReturnType<typeof useCreateIssueMutation>;
export type CreateIssueMutationResult = Apollo.MutationResult<CreateIssueMutation>;
export type CreateIssueMutationOptions = Apollo.BaseMutationOptions<CreateIssueMutation, CreateIssueMutationVariables>;
export const UpdateIssueDocument = gql`
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
export type UpdateIssueMutationFn = Apollo.MutationFunction<UpdateIssueMutation, UpdateIssueMutationVariables>;

/**
 * __useUpdateIssueMutation__
 *
 * To run a mutation, you first call `useUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueMutation, { data, loading, error }] = useUpdateIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateIssueInput: // value for 'updateIssueInput'
 *   },
 * });
 */
export function useUpdateIssueMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIssueMutation, UpdateIssueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIssueMutation, UpdateIssueMutationVariables>(UpdateIssueDocument, options);
      }
export type UpdateIssueMutationHookResult = ReturnType<typeof useUpdateIssueMutation>;
export type UpdateIssueMutationResult = Apollo.MutationResult<UpdateIssueMutation>;
export type UpdateIssueMutationOptions = Apollo.BaseMutationOptions<UpdateIssueMutation, UpdateIssueMutationVariables>;
export const RemoveIssueDocument = gql`
    mutation RemoveIssue($id: String!) {
  removeIssue(id: $id)
}
    `;
export type RemoveIssueMutationFn = Apollo.MutationFunction<RemoveIssueMutation, RemoveIssueMutationVariables>;

/**
 * __useRemoveIssueMutation__
 *
 * To run a mutation, you first call `useRemoveIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeIssueMutation, { data, loading, error }] = useRemoveIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveIssueMutation(baseOptions?: Apollo.MutationHookOptions<RemoveIssueMutation, RemoveIssueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveIssueMutation, RemoveIssueMutationVariables>(RemoveIssueDocument, options);
      }
export type RemoveIssueMutationHookResult = ReturnType<typeof useRemoveIssueMutation>;
export type RemoveIssueMutationResult = Apollo.MutationResult<RemoveIssueMutation>;
export type RemoveIssueMutationOptions = Apollo.BaseMutationOptions<RemoveIssueMutation, RemoveIssueMutationVariables>;
import type { CreateIssueInput, UpdateIssueInput } from '../generated/graphql';

import {
  GetIssuesDocument,
  useGetIssuesQuery,
  useCreateIssueMutation,
  useUpdateIssueMutation,
  useRemoveIssueMutation,
  useGetIssueQuery,
} from '../generated/graphql';

export const issueService = {
  useIssues: () => {
    const { data, loading, error, refetch } = useGetIssuesQuery();
    return {
      issues: data?.issues || [],
      loading,
      error,
      refetch,
    };
  },

  useIssue: (id: string) => {
    const { data, loading, error, refetch } = useGetIssueQuery({
      variables: { id },
    });
    return {
      issue: data?.issue || null,
      loading,
      error,
      refetch,
    };
  },

  useCreateIssue: () => {
    const [createIssue, { loading }] = useCreateIssueMutation({
      refetchQueries: [{ query: GetIssuesDocument }],
    });

    const create = async (input: CreateIssueInput) => {
      try {
        const response = await createIssue({
          variables: { createIssueInput: input },
        });
        return response.data?.createIssue;
      } catch (error) {
        console.error('Error creating issue:', error);

        throw error;
      }
    };

    return { create, loading };
  },

  useUpdateIssue: () => {
    const [updateIssue, { loading }] = useUpdateIssueMutation({
      refetchQueries: [{ query: GetIssuesDocument }],
    });

    const update = async (id: string, input: UpdateIssueInput) => {
      try {
        const response = await updateIssue({
          variables: { id, updateIssueInput: input },
        });
        return response.data?.updateIssue;
      } catch (error) {
        console.error('Error updating issue:', error);

        throw error;
      }
    };

    return { update, loading };
  },

  useRemoveIssue: () => {
    const [removeIssue, { loading }] = useRemoveIssueMutation({
      refetchQueries: [{ query: GetIssuesDocument }],
    });

    const remove = async (id: string) => {
      try {
        const response = await removeIssue({
          variables: { id },
        });
        return response.data?.removeIssue;
      } catch (error) {
        console.error('Error removing issue:', error);

        throw error;
      }
    };

    return { remove, loading };
  },
};

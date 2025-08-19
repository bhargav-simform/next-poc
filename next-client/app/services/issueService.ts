import {
  GetIssuesDocument,
  useGetIssuesQuery,
  useCreateIssueMutation,
  useUpdateIssueMutation,
  CreateIssueInput,
  UpdateIssueInput,
  useRemoveIssueMutation,
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
        /* eslint-disable no-console */
        console.error('Error creating issue:', error);
        /* eslint-enable no-console */
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
        /* eslint-disable no-console */
        console.error('Error updating issue:', error);
        /* eslint-enable no-console */
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
        /* eslint-disable no-console */
        console.error('Error removing issue:', error);
        /* eslint-enable no-console */
        throw error;
      }
    };

    return { remove, loading };
  },
};

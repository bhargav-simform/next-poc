import { useEffect, useState } from 'react';
import { message } from 'antd';
import { cloneDeep } from 'lodash';
import { issueService } from '../services/issueService';
import { CreateIssueInput, Issue, UpdateIssueInput } from '../generated/graphql';
import { IssueFormData } from '../types/issue';

export const useIssueManagement = () => {
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingIssue, setEditingIssue] = useState<Issue | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [severityFilters, setSeverityFilters] = useState<string[]>([]);

  const { remove, loading: deleteLoading } = issueService.useRemoveIssue();
  const { create, loading: createLoading } = issueService.useCreateIssue();
  const { update, loading: updateLoading } = issueService.useUpdateIssue();
  const { issues, loading: issuesLoading, refetch } = issueService.useIssues();

  const filterIssues = () => {
    let filtered = cloneDeep(issues);

    if (searchText) {
      filtered = filtered.filter(
        (issue) =>
          issue.title.toLowerCase().includes(searchText.toLowerCase()) ||
          issue.assignee.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (statusFilters.length > 0) {
      filtered = filtered.filter((issue) => statusFilters.includes(issue.status));
    }

    if (severityFilters.length > 0) {
      filtered = filtered.filter((issue) => severityFilters.includes(issue.priority));
    }

    setFilteredIssues(filtered);
  };

  const handleDelete = async (id: string) => {
    try {
      await remove(id);
      refetch();
      message.success('Issue deleted successfully');
    } catch (error) {
      message.error('Failed to delete issue');
    }
  };

  const handleCreateIssue = async (formData: IssueFormData) => {
    const newIssue: CreateIssueInput = {
      ...cloneDeep(formData),
    };
    try {
      await create(newIssue);
      setIsModalVisible(false);
      message.success('Issue created successfully');
    } catch (error) {
      message.error('Failed to create issue');
    }
  };

  useEffect(() => {
    filterIssues();
  }, [searchText, statusFilters, severityFilters, issues]);

  const handleUpdateIssue = async (formData: IssueFormData) => {
    if (editingIssue) {
      const updatedIssue: UpdateIssueInput = {
        ...cloneDeep(formData),
      };
      try {
        await update(editingIssue.id, updatedIssue);
        refetch();
        message.success('Issue updated successfully');
        setEditingIssue(null);
        setIsModalVisible(false);
      } catch (error) {
        message.error('Failed to update issue');
      }
    }
  };

  return {
    filteredIssues,
    isModalVisible,
    editingIssue,
    selectedRowKeys,
    searchText,
    statusFilters,
    severityFilters,
    deleteLoading,
    createLoading,
    updateLoading,
    issuesLoading,
    setIsModalVisible,
    setEditingIssue,
    setSelectedRowKeys,
    setSearchText,
    setStatusFilters,
    setSeverityFilters,
    filterIssues,
    handleDelete,
    handleCreateIssue,
    handleUpdateIssue,
  };
};

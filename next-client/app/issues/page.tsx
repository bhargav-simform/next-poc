'use client';

import React, { useEffect, useState } from 'react';
import { Space, Table, TableColumnsType, Tag, message } from 'antd';
import { PlusOutlined, DeleteOutlined, ExportOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';
import { Container, Header, Title, ActionContainer } from '../components/issues/styles';
import { Status, Severity, IssueFormData, mockUsers } from '../types/issue';
import { localStorageService } from '../services/localStorageService';
import FilterBar from '../components/issues/FilterBar';
import ConfirmationModal from '../components/issues/ConfirmationModal';
import { Button } from '../components/Button';
import IssueDrawer from '../components/drawers/IssueDrawer';
import Link from 'next/link';
import { issueService } from '../services/issueService';
import { Issue } from '../generated/graphql';

const getStatusColor = (status: Status): string => {
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

const getSeverityColor = (severity: Severity): string => {
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


const getAssigneeName = (id: string) => {
  const user = mockUsers.find((u) => u.id === id);
  return user ? user.name : 'Unassigned';
};

export default function IssuesPage() {
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingIssue, setEditingIssue] = useState<Issue | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [statusFilters, setStatusFilters] = useState<string[]>([]);
  const [severityFilters, setSeverityFilters] = useState<string[]>([]);

  const { remove, loading: deleteLoading } = issueService.useRemoveIssue();
  const { issues, loading: issuesLoading, error: issuesError } = issueService.useIssues();
  

  function filterIssues() {
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
      filtered = filtered.filter((issue) => severityFilters.includes(issue.severity));
    }

    setFilteredIssues(filtered);
  }


  useEffect(() => {
    filterIssues();
  }, [issues, searchText, statusFilters, severityFilters]);

  const handleDelete = async (id: string) => {
      try {
        await remove(id);
        message.success('Issue deleted successfully');
        // refetch(); // Refresh the issues list
      } catch (error) {
        message.error('Failed to delete issue');
      }
  };
  

  const handleCreateIssue = (formData: IssueFormData) => {
    const clonedFormData = cloneDeep(formData);
    const newIssue: Issue = {
      ...clonedFormData,
      id: uuidv4(),
      created_at: new Date().toISOString(),
    };
    localStorageService.saveIssue(newIssue);
    setIsModalVisible(false);
    message.success('Issue created successfully');
  };

  const handleUpdateIssue = (formData: IssueFormData) => {
    if (editingIssue) {
      const updatedIssue: Issue = {
        ...cloneDeep(formData), // deep clone
        id: editingIssue.id,
        created_at: editingIssue.created_at,
      };
      localStorageService.updateIssue(updatedIssue);
      setEditingIssue(null);
      setIsModalVisible(false);
      message.success('Issue updated successfully');
    }
  };

  const handleDeleteIssue = (id: string) => {
    ConfirmationModal({
      title: 'Delete Issue',
      content: 'Are you sure you want to delete this issue?',
      onConfirm: () => {
        localStorageService.deleteIssue(id);
        message.success('Issue deleted successfully');
      },
    });
  };

  const handleBulkDelete = () => {
    if (selectedRowKeys.length === 0) return;

    ConfirmationModal({
      title: 'Delete Issues',
      content: `Are you sure you want to delete ${selectedRowKeys.length} issues?`,
      onConfirm: () => {
        localStorageService.deleteMultipleIssues(selectedRowKeys);
        setSelectedRowKeys([]);
        message.success('Issues deleted successfully');
      },
    });
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['ID', 'Title', 'Description', 'Status', 'Severity', 'Assignee', 'Created Date'],
      ...filteredIssues.map((issue) => [
        issue.id,
        issue.title,
        issue.description,
        issue.status,
        issue.severity,
        issue.assignee,
        issue.created_at,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'issues.csv';
    link.click();
  };

  const onCloseModal = (): void => {
    setIsModalVisible(false);
    setEditingIssue(null);
  };

  const columns: TableColumnsType<Issue> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: Issue) => <Link href={`/issues/${record.id}`}>{text}</Link>,
    },
    {
      title: 'Assignee',
      dataIndex: 'assignee',
      key: 'assignee',
      render: (id: string) => getAssigneeName(id),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      key: 'severity',
      render: (severity: Severity) => <Tag color={getSeverityColor(severity)}>{severity}</Tag>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Status) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: Severity) => (
        <Tag color={getSeverityColor(priority)}>{priority}</Tag>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Link href={`/issues/${record.id}`}>
            <Button type="text" icon={<EyeOutlined />} />
          </Link>
          <Link href={`/issues/${record.id}/edit`}>
            <Button type="text" icon={<EditOutlined />} />
          </Link>
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            loading={deleteLoading}
          />
        </Space>
      ),
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Issue Management</Title>
        <ActionContainer>
          {selectedRowKeys.length > 0 && (
            <Button icon={<DeleteOutlined />} danger onClick={handleBulkDelete}>
              Delete Selected ({selectedRowKeys.length})
            </Button>
          )}
          <Button icon={<ExportOutlined />} onClick={handleExportCSV}>
            Export CSV
          </Button>
          <Button
            type='primary'
            icon={<PlusOutlined />}
            onClick={() => {
              setEditingIssue(null);
              setIsModalVisible(true);
            }}
          >
            Create Issue
          </Button>
        </ActionContainer>
      </Header>

      <FilterBar
        onSearchChange={setSearchText}
        onStatusChange={setStatusFilters}
        onSeverityChange={setSeverityFilters}
      />

      <Table
        rowKey='id'
        columns={columns}
        dataSource={filteredIssues}
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys as string[]),
        }}
      />
      {isModalVisible && (
        <IssueDrawer
          title={editingIssue ? 'Edit Issue' : 'Create Issue'}
          initialValues={editingIssue || undefined}
          open={isModalVisible}
          onClose={onCloseModal}
          onSubmit={editingIssue ? handleUpdateIssue : handleCreateIssue}
        />
      )}
    </Container>
  );
}

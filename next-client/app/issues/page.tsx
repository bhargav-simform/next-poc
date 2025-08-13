'use client';

import React, { useEffect, useState } from 'react';
import { Table, Tag, message } from 'antd';
import { PlusOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';
import { Container, Header, Title, ActionContainer } from '../components/issues/styles';
import { Issue, Status, Severity, IssueFormData } from '../types/issue';
import { localStorageService } from '../services/localStorageService';
import FilterBar from '../components/issues/FilterBar';
import ConfirmationModal from '../components/issues/ConfirmationModal';
import { Button } from '../components/Button';
import IssueDrawer from '../components/drawers/IssueDrawer';

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingIssue, setEditingIssue] = useState<Issue | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [statusFilters, setStatusFilters] = useState<Status[]>([]);
  const [severityFilters, setSeverityFilters] = useState<Severity[]>([]);

  function loadIssues() {
    const loadedIssues = localStorageService.getIssues();
    setIssues(loadedIssues);
  }

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
    loadIssues();
  }, []);

  useEffect(() => {
    filterIssues();
  }, [issues, searchText, statusFilters, severityFilters]);

  const handleCreateIssue = (formData: IssueFormData) => {
    const clonedFormData = cloneDeep(formData);
    const newIssue: Issue = {
      ...clonedFormData,
      id: uuidv4(),
      createdDate: new Date().toISOString(),
    };
    localStorageService.saveIssue(newIssue);
    loadIssues();
    setIsModalVisible(false);
    message.success('Issue created successfully');
  };

  const handleUpdateIssue = (formData: IssueFormData) => {
    if (editingIssue) {
      const updatedIssue: Issue = {
        ...cloneDeep(formData), // deep clone
        id: editingIssue.id,
        createdDate: editingIssue.createdDate,
      };
      localStorageService.updateIssue(updatedIssue);
      loadIssues();
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
        loadIssues();
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
        loadIssues();
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
        issue.createdDate,
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

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a: Issue, b: Issue) => a.title.localeCompare(b.title),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: Status) => {
        let statusColor = 'blue';

        if (status === 'Open') {
          statusColor = 'green';
        }

        if (status === 'In Progress') {
          statusColor = 'orange';
        }

        return <Tag color={statusColor}>{status}</Tag>;
      },
      sorter: (a: Issue, b: Issue) => a.status.localeCompare(b.status),
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      render: (severity: Severity) => {
        let severityColor = 'green';
        if (severity === 'High') {
          severityColor = 'red';
        } else if (severity === 'Medium') {
          severityColor = 'orange';
        }

        return <Tag color={severityColor}>{severity}</Tag>;
      },
      sorter: (a: Issue, b: Issue) => a.severity.localeCompare(b.severity),
    },
    {
      title: 'Assignee',
      dataIndex: 'assignee',
      sorter: (a: Issue, b: Issue) => a.assignee.localeCompare(b.assignee),
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      render: (date: string) => new Date(date).toLocaleDateString(),
      sorter: (a: Issue, b: Issue) =>
        new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Issue) => (
        <ActionContainer>
          <Button
            type='link'
            onClick={() => {
              setEditingIssue(record);
              setIsModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Button type='link' danger onClick={() => handleDeleteIssue(record.id)}>
            Delete
          </Button>
        </ActionContainer>
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
          initialValues={editingIssue || undefined}
          isModalVisible={isModalVisible}
          onClose={onCloseModal}
          onSubmit={editingIssue ? handleUpdateIssue : handleCreateIssue}
        />
      )}
    </Container>
  );
}

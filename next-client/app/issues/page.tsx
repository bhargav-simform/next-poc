'use client';

import React from 'react';
import { message } from 'antd';
import { PlusOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import { Container, Header, Title, ActionContainer } from '../components/issues/styles';
import FilterBar from '../components/issues/FilterBar';
import ConfirmationModal from '../components/issues/ConfirmationModal';
import { Button } from '../components/Button';
import IssueDrawer from '../components/drawers/IssueDrawer';
import { useIssueManagement } from '../hooks/useIssueManagement';
import { generateCSVContent } from '../utils/issueUtils';
import { IssueTable } from '../components/issues/IssueTable';

export default function IssuesPage() {
  const {
    filteredIssues,
    isModalVisible,
    editingIssue,
    selectedRowKeys,
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
    handleDelete,
    handleCreateIssue,
    handleUpdateIssue,
  } = useIssueManagement();

  const handleDeleteIssue = (id: string) => {
    ConfirmationModal({
      title: 'Delete Issue',
      content: 'Are you sure you want to delete this issue?',
      onConfirm: () => {
        handleDelete(id);
      },
    });
  };

  const handleBulkDelete = () => {
    if (selectedRowKeys.length === 0) return;

    ConfirmationModal({
      title: 'Delete Issues',
      content: `Are you sure you want to delete ${selectedRowKeys.length} issues?`,
      onConfirm: () => {
        Promise.all(selectedRowKeys.map((id) => handleDelete(id))).then(() => {
          setSelectedRowKeys([]);
          message.success('Issues deleted successfully');
        });
      },
    });
  };

  const handleExportCSV = () => {
    const csvContent = generateCSVContent(filteredIssues);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'issues.csv';
    link.click();
  };

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

      <IssueTable
        issues={filteredIssues}
        loading={issuesLoading}
        selectedRowKeys={selectedRowKeys}
        onSelectRows={setSelectedRowKeys}
        onEdit={(issue) => {
          setEditingIssue(issue);
          setIsModalVisible(true);
        }}
        onDelete={handleDeleteIssue}
        deleteLoading={deleteLoading}
      />

      {isModalVisible && (
        <IssueDrawer
          title={editingIssue ? 'Edit Issue' : 'Create Issue'}
          initialValues={editingIssue || undefined}
          open={isModalVisible}
          isLoading={createLoading || updateLoading}
          onClose={() => {
            setIsModalVisible(false);
            setEditingIssue(null);
          }}
          onSubmit={editingIssue ? handleUpdateIssue : handleCreateIssue}
        />
      )}
    </Container>
  );
}

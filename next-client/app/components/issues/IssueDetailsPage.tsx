'use client';

import React, { Suspense } from 'react';
import { Card, Descriptions, Tag, Space, Skeleton } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import showConfirmationModal from '@/app/components/modals/ConfirmationModal';
import { Button } from '@/app/components/Button';
import { issueService } from '@/app/services/issueService';
import { useIssueManagement } from '@/app/hooks/useIssueManagement';
import IssueDrawer from '../drawers/IssueDrawer';
import { LoadingVariants } from '../LoadingFallback';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 24px;
  }
`;

const Description = styled.div`
  margin-top: 24px;

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

interface Props {
  issueId: string;
}

function IssueDetailsContent({ issueId }: Readonly<Props>) {
  const router = useRouter();

  const { issue, loading } = issueService.useIssue(issueId);
  const {
    updateLoading,
    isModalVisible,
    setEditingIssue,
    setIsModalVisible,
    handleDelete: handleDeleteIssue,
    handleUpdateIssue,
  } = useIssueManagement();

  const handleDelete = () => {
    showConfirmationModal({
      title: 'Delete Issue',
      content: 'Are you sure you want to delete this issue?',
      onConfirm: () => {
        handleDeleteIssue(issueId).then(() => {
          router.push('/issues');
        });
      },
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'blue';
      case 'In Progress':
        return 'orange';
      case 'Resolved':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'blue';
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <Header>
          <Title>Issue Details</Title>
        </Header>
        <StyledCard>
          <Skeleton active paragraph={{ rows: 10 }} />
        </StyledCard>
      </PageContainer>
    );
  }

  if (!issue) {
    return null;
  }

  return (
    <PageContainer>
      <Header>
        <Title>Issue Details</Title>
        <Space>
          <Button
            icon={<EditOutlined />}
            type='primary'
            onClick={() => {
              setIsModalVisible(true);
              setEditingIssue(issue);
            }}
          >
            Edit
          </Button>
          <Button danger icon={<DeleteOutlined />} onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      </Header>

      <StyledCard>
        <Descriptions column={1} bordered>
          <Descriptions.Item label='ID'>{issue.id}</Descriptions.Item>
          <Descriptions.Item label='Title'>{issue.title}</Descriptions.Item>
          <Descriptions.Item label='Assignee'>{issue.assignee || 'Unassigned'}</Descriptions.Item>
          <Descriptions.Item label='Due Date'>
            {new Date(issue.due_date).toLocaleDateString()}
          </Descriptions.Item>
          <Descriptions.Item label='Priority'>
            <Tag color={getSeverityColor(issue.priority)}>{issue.priority}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label='Status'>
            <Tag color={getStatusColor(issue.status)}>{issue.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label='Browser'>{issue.browser}</Descriptions.Item>
          <Descriptions.Item label='Reproachable'>
            {issue.reproducible ? 'Yes' : 'No'}
          </Descriptions.Item>
          <Descriptions.Item label='Estimation'>{issue.estimation} hours</Descriptions.Item>
          <Descriptions.Item label='Created Date'>
            {new Date(issue.created_at).toLocaleString()}
          </Descriptions.Item>
        </Descriptions>

        <Description>
          <h2>Description</h2>
          <div dangerouslySetInnerHTML={{ __html: issue.description }} />
        </Description>
      </StyledCard>
      {isModalVisible && issue && (
        <IssueDrawer
          title='Edit Issue'
          initialValues={issue || undefined}
          open={isModalVisible}
          isLoading={updateLoading}
          onClose={() => {
            setIsModalVisible(false);
          }}
          onSubmit={handleUpdateIssue}
        />
      )}
    </PageContainer>
  );
}

export default function IssueDetailsPage({ issueId }: Readonly<Props>) {
  return (
    <Suspense fallback={<LoadingVariants.Component message="Loading issue details..." />}>
      <IssueDetailsContent issueId={issueId} />
    </Suspense>
  );
}

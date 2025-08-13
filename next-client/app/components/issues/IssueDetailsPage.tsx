'use client';

import React, { useEffect, useState } from 'react';
import { message, Card, Descriptions, Tag, Space, Skeleton } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { Issue, User, mockUsers, Status, Severity } from '@/app/types/issue';
import { localStorageService } from '@/app/services/localStorageService';
import showConfirmationModal from '@/app/components/modals/ConfirmationModal';
import { Button } from '@/app/components/Button';

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

export default function IssueDetailsPage({ issueId }: Props) {
  const router = useRouter();
  const [issue, setIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIssue = () => {
      const issues = localStorageService.getIssues();
      const foundIssue = issues.find((i: Issue) => i.id === issueId);
      if (foundIssue) {
        setIssue(foundIssue);
      } else {
        message.error('Issue not found');
        router.push('/issues');
      }
      setLoading(false);
    };

    loadIssue();
  }, [issueId, router]);

  const handleDelete = () => {
    showConfirmationModal({
      title: 'Delete Issue',
      content: 'Are you sure you want to delete this issue?',
      onConfirm: () => {
        localStorageService.deleteIssue(issueId);
        message.success('Issue deleted successfully');
        router.push('/issues');
      },
    });
  };

  const getStatusColor = (status: Status) => {
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

  const getSeverityColor = (severity: Severity) => {
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

  const assignee = mockUsers.find((user: User) => user.id === issue.assignee);

  return (
    <PageContainer>
      <Header>
        <Title>Issue Details</Title>
        <Space>
          <Link href={`/issues/${issue.id}/edit`} passHref>
            <Button icon={<EditOutlined />} type='primary'>
              Edit
            </Button>
          </Link>
          <Button danger icon={<DeleteOutlined />} onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      </Header>

      <StyledCard>
        <Descriptions column={1} bordered>
          <Descriptions.Item label='ID'>{issue.id}</Descriptions.Item>
          <Descriptions.Item label='Title'>{issue.title}</Descriptions.Item>
          <Descriptions.Item label='Assignee'>{assignee?.name || 'Unassigned'}</Descriptions.Item>
          <Descriptions.Item label='Due Date'>
            {new Date(issue.dueDate).toLocaleDateString()}
          </Descriptions.Item>
          <Descriptions.Item label='Severity'>
            <Tag color={getSeverityColor(issue.severity)}>{issue.severity}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label='Status'>
            <Tag color={getStatusColor(issue.status)}>{issue.status}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label='Browser'>{issue.browser}</Descriptions.Item>
          <Descriptions.Item label='Reproducible'>
            {issue.reproducible ? 'Yes' : 'No'}
          </Descriptions.Item>
          <Descriptions.Item label='Estimation'>{issue.estimation} hours</Descriptions.Item>
          <Descriptions.Item label='Created Date'>
            {new Date(issue.createdDate).toLocaleString()}
          </Descriptions.Item>
        </Descriptions>

        <Description>
          <h2>Description</h2>
          <div dangerouslySetInnerHTML={{ __html: issue.description }} />
        </Description>
      </StyledCard>
    </PageContainer>
  );
}

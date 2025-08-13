'use client';

import React from 'react';
import { Table, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';
import { Issue, Status, Severity, mockUsers } from '../../types/issue';
import { Button } from '../Button';

const TableContainer = styled.div`
  .ant-table-wrapper {
    background: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

interface IssueTableProps {
  data: Issue[];
  loading?: boolean;
  onDelete?: (id: string) => void;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
}

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

const IssueTable: React.FC<IssueTableProps> = ({ data, loading, onDelete, pagination }) => {
  const getAssigneeName = (id: string) => {
    const user = mockUsers.find((u) => u.id === id);
    return user ? user.name : 'Unassigned';
  };

  const columns = [
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
      render: (status: Status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Issue) => (
        <Space>
          <Link href={`/issues/${record.id}`} passHref>
            <Button icon={<EyeOutlined />} size='small' />
          </Link>
          <Link href={`/issues/${record.id}/edit`} passHref>
            <Button icon={<EditOutlined />} size='small' />
          </Link>
          {onDelete && (
            <Button
              icon={<DeleteOutlined />}
              size='small'
              danger
              onClick={() => onDelete(record.id)}
            />
          )}
        </Space>
      ),
    },
  ];

  return (
    <TableContainer>
      <Table
        columns={columns}
        dataSource={data}
        rowKey='id'
        loading={loading}
        pagination={pagination}
      />
    </TableContainer>
  );
};

export default IssueTable;

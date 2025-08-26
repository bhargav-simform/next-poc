/* eslint-disable no-unused-vars */
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableColumnsType } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';
import type { Issue } from '../../generated/graphql';
import type { Status, Severity } from '../../types/issue';
import { Button } from '../Button';
import { getStatusColor, getSeverityColor, getAssigneeName } from '../../utils/issueUtils';

interface IssueTableProps {
  issues: Issue[];
  loading: boolean;
  selectedRowKeys: string[];
  onSelectRows: (selectedKeys: string[]) => void;
  onEdit: (issue: Issue) => void;
  onDelete: (id: string) => void;
  deleteLoading: boolean;
}

export function IssueTable({
  issues,
  loading,
  selectedRowKeys,
  onSelectRows,
  onEdit,
  onDelete,
  deleteLoading,
}: Readonly<IssueTableProps>): React.ReactElement {
  const columns: TableColumnsType<Issue> = [
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
      dataIndex: 'due_date',
      key: 'due_date',
      render: (date: Date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: Status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: Severity) => <Tag color={getSeverityColor(priority)}>{priority}</Tag>,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: Date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: unknown, record: Issue) => (
        <Space size='middle'>
          <Link href={`/issues/${record.id}`}>
            <Button type='text' icon={<EyeOutlined />} />
          </Link>
          <Button type='text' icon={<EditOutlined />} onClick={() => onEdit(record)} />
          <Button
            type='text'
            danger
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record.id)}
            loading={deleteLoading}
          />
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey='id'
      loading={loading}
      columns={columns}
      dataSource={issues}
      rowSelection={{
        selectedRowKeys,
        onChange: (selectedKeys) => onSelectRows(selectedKeys as string[]),
      }}
    />
  );
}

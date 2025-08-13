'use client';

import React from 'react';
import { Form, Input, Select, DatePicker, InputNumber, Switch, Button } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import {
  Issue,
  IssueFormData,
  Status,
  Severity,
  Browser,
  mockUsers,
} from '../../types/issue';
import { FormContainer, StyledForm, ButtonContainer } from './styles';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});
import 'react-quill/dist/quill.snow.css';

interface IssueFormProps {
  initialValues?: Issue;
  onSubmit: (values: IssueFormData) => void;
  isLoading?: boolean;
}

const statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];
const severityOptions = ['Low', 'Medium', 'High'];
const browserOptions = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'];

const IssueForm: React.FC<IssueFormProps> = ({
  initialValues,
  onSubmit,
  isLoading = false,
}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const formattedValues: IssueFormData = {
      ...values,
      dueDate: values.dueDate.toISOString(),
    };
    await onSubmit(formattedValues);
  };

  const initialFormValues = initialValues
    ? {
        ...initialValues,
        dueDate: dayjs(initialValues.dueDate),
      }
    : undefined;

  return (
    <FormContainer>
      <StyledForm
        form={form}
        layout="vertical"
        initialValues={initialFormValues}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input placeholder="Enter issue title" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a description' }]}
        >
          <ReactQuill theme="snow" />
        </Form.Item>

        <Form.Item
          name="assignee"
          label="Assignee"
          rules={[{ required: true, message: 'Please select an assignee' }]}
        >
          <Select placeholder="Select assignee">
            {mockUsers.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="dueDate"
          label="Due Date"
          rules={[{ required: true, message: 'Please select a due date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="severity"
          label="Severity"
          rules={[{ required: true, message: 'Please select severity' }]}
        >
          <Select placeholder="Select severity">
            {severityOptions.map((severity) => (
              <Select.Option key={severity} value={severity}>
                {severity}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="browser"
          label="Browser"
          rules={[{ required: true, message: 'Please select or enter browser' }]}
        >
          <Select placeholder="Select browser" allowClear showSearch>
            {browserOptions.map((browser) => (
              <Select.Option key={browser} value={browser}>
                {browser}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="reproducible"
          label="Reproducible"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="estimation"
          label="Estimation (hours)"
          rules={[{ required: true, message: 'Please enter estimation' }]}
        >
          <InputNumber
            min={0}
            step={0.5}
            style={{ width: '100%' }}
            placeholder="Enter estimated hours"
          />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please select status' }]}
        >
          <Select placeholder="Select status">
            {statusOptions.map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <ButtonContainer>
          <Button onClick={() => router.back()}>Cancel</Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {initialValues ? 'Update Issue' : 'Create Issue'}
          </Button>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};

export default IssueForm;

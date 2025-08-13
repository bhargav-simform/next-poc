import React from 'react';
import { Form, Input, Select, Button, Modal } from 'antd';
import { IssueFormData } from '../../types/issue';
import styled from 'styled-components';

const { TextArea } = Input;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`;

interface IssueFormProps {
  initialValues?: IssueFormData;
  onSubmit: (values: IssueFormData) => void;
  isModalVisible: boolean;
  onCancel: () => void;
  title: string;
}

const IssueForm: React.FC<IssueFormProps> = ({
  initialValues,
  onSubmit,
  isModalVisible,
  onCancel,
  title,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error('Form validation failed:', error);
    }
  };

  return (
    <Modal
      title={title}
      open={isModalVisible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <StyledForm
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter a description' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please select a status' }]}
        >
          <Select>
            <Select.Option value="Open">Open</Select.Option>
            <Select.Option value="In Progress">In Progress</Select.Option>
            <Select.Option value="Closed">Closed</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: 'Please select a priority' }]}
        >
          <Select>
            <Select.Option value="Low">Low</Select.Option>
            <Select.Option value="Medium">Medium</Select.Option>
            <Select.Option value="High">High</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="assignedTo"
          label="Assigned To"
          rules={[{ required: true, message: 'Please enter assignee' }]}
        >
          <Input />
        </Form.Item>
      </StyledForm>
    </Modal>
  );
};

export default IssueForm;

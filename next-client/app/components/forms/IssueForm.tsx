'use client';

import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Form, Input, Select, DatePicker, InputNumber, Switch } from 'antd';
import dayjs from 'dayjs';
import { cloneDeep } from 'lodash';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Issue } from '@/app/generated/graphql';
import { StyledForm, ButtonContainer } from './styles';
import { IssueFormData, mockUsers } from '../../types/issue';
import 'draft-js/dist/Draft.css';
import { Button } from '../Button';

const Editor = dynamic(() => import('../Editor'), { ssr: false });

interface IssueFormProps {
  initialValues?: Issue | IssueFormData;
  onSubmit: (values: IssueFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const statusOptions = ['Open', 'In Progress', 'Resolved', 'Closed'];
export const severityOptions = ['Low', 'Medium', 'High'];
export const browserOptions = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'];

function IssueForm({
  initialValues,
  onSubmit,
  onCancel,
  isLoading = false,
}: Readonly<IssueFormProps>): React.ReactElement {
  const [form] = Form.useForm<IssueFormData>();
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [htmlToDraft, setHtmlToDraft] = useState<any>(null);

  /** Dynamically load html-to-draftjs */
  useEffect(() => {
    const loadHtmlToDraft = async () => {
      if (typeof window !== 'undefined') {
        const { default: lib } = await import('html-to-draftjs');
        setHtmlToDraft(() => lib);
      }
    };
    loadHtmlToDraft();
  }, []);

  /** Convert HTML string to EditorState */
  const htmlToDraftEditorState = useCallback(
    (html: string) => {
      if (!htmlToDraft) return EditorState.createEmpty();
      const { contentBlocks, entityMap } = htmlToDraft(html || '');
      return EditorState.createWithContent(
        ContentState.createFromBlockArray(contentBlocks, entityMap),
      );
    },
    [htmlToDraft],
  );

  /** Reset form + editor when initialValues or library changes */
  useEffect(() => {
    if (!htmlToDraft) return;

    if (initialValues) {
      setEditorState(htmlToDraftEditorState(initialValues.description || ''));
      form.setFieldsValue({
        ...cloneDeep(initialValues),
        due_date: dayjs(initialValues.due_date),
      });
    } else {
      setEditorState(EditorState.createEmpty());
      form.resetFields();
    }
  }, [initialValues, htmlToDraft, form, htmlToDraftEditorState]);

  /** Submit handler */
  const handleSubmit = (values: IssueFormData) => {
    const clonedValues = cloneDeep(values);
    const formattedValues: IssueFormData = {
      ...clonedValues,
      due_date: clonedValues.due_date.toISOString(),
      description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };
    onSubmit(formattedValues);
  };

  /** Pre-set initial values (only for uncontrolled fallback) */
  const initialFormValues = initialValues
    ? { ...cloneDeep(initialValues), due_date: dayjs(initialValues.due_date) }
    : undefined;

  return (
    <StyledForm
      form={form}
      layout='vertical'
      initialValues={initialFormValues}
      onFinish={handleSubmit}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: '8px' }}>
        <Form.Item
          name='title'
          label='Title'
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input placeholder='Enter issue title' />
        </Form.Item>

        <Form.Item label='Description'>
          <Editor
            editorState={editorState}
            handleEditorStateChange={setEditorState}
            placeholder='Enter issue description...'
          />
        </Form.Item>

        <Form.Item
          name='assignee'
          label='Assignee'
          rules={[{ required: true, message: 'Please select an assignee' }]}
        >
          <Select placeholder='Select assignee'>
            {mockUsers.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name='due_date'
          label='Due Date'
          rules={[{ required: true, message: 'Please select a due date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name='browser'
          label='Browser'
          rules={[{ required: true, message: 'Please select or enter browser' }]}
        >
          <Select placeholder='Select browser' allowClear showSearch>
            {browserOptions.map((browser) => (
              <Select.Option key={browser} value={browser}>
                {browser}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name='reproducible' label='Reproachable' valuePropName='checked'>
          <Switch />
        </Form.Item>

        <Form.Item
          name='estimation'
          label='Estimation (hours)'
          rules={[{ required: true, message: 'Please enter estimation' }]}
        >
          <InputNumber
            min={0}
            step={0.5}
            style={{ width: '100%' }}
            placeholder='Enter estimated hours'
          />
        </Form.Item>

        <Form.Item
          name='status'
          label='Status'
          rules={[{ required: true, message: 'Please select status' }]}
        >
          <Select placeholder='Select status'>
            {statusOptions.map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <ButtonContainer style={{ marginTop: '16px' }}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          {initialValues ? 'Update Issue' : 'Create Issue'}
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
}

export default IssueForm;

"use client";

import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Drawer,
} from "antd";
import dayjs from "dayjs";
import {
  Issue,
  IssueFormData,
  mockUsers,
} from "../../types/issue";
import { StyledForm, ButtonContainer } from "./styles";
import {
  ContentState,
  EditorState,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "draft-js/dist/Draft.css";
import Editor from "../Editor";

interface IssueFormProps {
  title: string;
  initialValues?: Issue;
  isModalVisible: boolean; // You can rename this to isDrawerOpen
  onSubmit: (values: IssueFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const statusOptions = ["Open", "In Progress", "Resolved", "Closed"];
const severityOptions = ["Low", "Medium", "High"];
const browserOptions = ["Chrome", "Firefox", "Safari", "Edge", "Other"];

const IssueForm: React.FC<IssueFormProps> = ({
  title,
  initialValues,
  isModalVisible,
  onSubmit,
  onCancel,
  isLoading = false,
}) => {
  const [form] = Form.useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const initialHtml = "";
    const blocksFromHtml = htmlToDraft(initialHtml);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    setEditorState(EditorState.createWithContent(contentState));
  }, []);

  const handleSubmit = async (values: any) => {
    const formattedValues: IssueFormData = {
      ...values,
      dueDate: values.dueDate.toISOString(),
      description: draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      ),
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
    <Drawer
      title={title}
      placement="right"
      width={800}
      onClose={onCancel}
      open={isModalVisible}
      destroyOnClose
    >
      <StyledForm
        form={form}
        layout="vertical"
        initialValues={initialFormValues}
        onFinish={handleSubmit}
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1, overflowY: "auto", paddingRight: "8px" }}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input placeholder="Enter issue title" />
          </Form.Item>

          <Form.Item label="Description">
            <Editor
                editorState={editorState}
                handleEditorStateChange={setEditorState}
                placeholder="Enter issue description..."
            />
          </Form.Item>

          <Form.Item
            name="assignee"
            label="Assignee"
            rules={[{ required: true, message: "Please select an assignee" }]}
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
            rules={[{ required: true, message: "Please select a due date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="severity"
            label="Severity"
            rules={[{ required: true, message: "Please select severity" }]}
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
            rules={[
              { required: true, message: "Please select or enter browser" },
            ]}
          >
            <Select placeholder="Select browser" allowClear showSearch>
              {browserOptions.map((browser) => (
                <Select.Option key={browser} value={browser}>
                  {browser}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="reproducible" label="Reproducible" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            name="estimation"
            label="Estimation (hours)"
            rules={[{ required: true, message: "Please enter estimation" }]}
          >
            <InputNumber
              min={0}
              step={0.5}
              style={{ width: "100%" }}
              placeholder="Enter estimated hours"
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select status" }]}
          >
            <Select placeholder="Select status">
              {statusOptions.map((status) => (
                <Select.Option key={status} value={status}>
                  {status}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <ButtonContainer style={{ marginTop: "16px" }}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {initialValues ? "Update Issue" : "Create Issue"}
          </Button>
        </ButtonContainer>
      </StyledForm>
    </Drawer>
  );
};

export default IssueForm;

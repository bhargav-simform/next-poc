import React from 'react';
import { Drawer, Form, Select, DatePicker, Switch, Button } from 'antd';
import styled from 'styled-components';
import { Status, Severity, mockUsers } from '../../types/issue';

const { RangePicker } = DatePicker;

const FilterForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`;

interface FilterValues {
  assignees?: string[];
  severity?: Severity[];
  browser?: string[];
  reproducible?: boolean;
  status?: Status[];
  dateRange?: [string, string];
}

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onFilter: (values: FilterValues) => void;
  currentFilters?: FilterValues;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  onClose,
  onFilter,
  currentFilters,
}) => {
  const [form] = Form.useForm();

  const handleFilter = (values: any) => {
    const filters: FilterValues = {
      ...values,
      dateRange: values.dateRange
        ? [values.dateRange[0].toISOString(), values.dateRange[1].toISOString()]
        : undefined,
    };
    onFilter(filters);
    onClose();
  };

  const handleReset = () => {
    form.resetFields();
    onFilter({});
    onClose();
  };

  return (
    <Drawer
      title="Filter Issues"
      placement="right"
      width={400}
      onClose={onClose}
      open={open}
    >
      <FilterForm
        form={form}
        layout="vertical"
        initialValues={currentFilters}
        onFinish={handleFilter}
      >
        <Form.Item name="assignees" label="Assignee">
          <Select
            mode="multiple"
            placeholder="Filter by assignee"
            allowClear
          >
            {mockUsers.map((user) => (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="severity" label="Severity">
          <Select
            mode="multiple"
            placeholder="Filter by severity"
            allowClear
          >
            {['Low', 'Medium', 'High'].map((severity) => (
              <Select.Option key={severity} value={severity}>
                {severity}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="browser" label="Browser">
          <Select
            mode="multiple"
            placeholder="Filter by browser"
            allowClear
          >
            {['Chrome', 'Firefox', 'Safari', 'Edge', 'Other'].map((browser) => (
              <Select.Option key={browser} value={browser}>
                {browser}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="reproducible" label="Reproducible" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item name="status" label="Status">
          <Select
            mode="multiple"
            placeholder="Filter by status"
            allowClear
          >
            {['Open', 'In Progress', 'Resolved', 'Closed'].map((status) => (
              <Select.Option key={status} value={status}>
                {status}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="dateRange" label="Due Date Range">
          <RangePicker style={{ width: '100%' }} />
        </Form.Item>

        <ButtonContainer>
          <Button onClick={handleReset}>Reset</Button>
          <Button type="primary" htmlType="submit">
            Apply Filters
          </Button>
        </ButtonContainer>
      </FilterForm>
    </Drawer>
  );
};

export default FilterDrawer;

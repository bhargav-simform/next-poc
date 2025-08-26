/* eslint-disable no-unused-vars */
import React from 'react';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterContainer } from './styles';
import type { Status, Severity } from '../../types/issue';

const { Option } = Select;

interface FilterBarProps {
  onSearchChange: (value: string) => void;
  onStatusChange: (values: Status[]) => void;
  onSeverityChange: (values: Severity[]) => void;
}

function FilterBar({
  onSearchChange,
  onStatusChange,
  onSeverityChange,
}: Readonly<FilterBarProps>): React.ReactElement {
  return (
    <FilterContainer>
      <Input
        placeholder='Search by title or assignee'
        prefix={<SearchOutlined />}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: 250 }}
      />
      <Select
        mode='multiple'
        placeholder='Filter by Status'
        onChange={onStatusChange}
        style={{ minWidth: 200 }}
      >
        <Option value='Open'>Open</Option>
        <Option value='In Progress'>In Progress</Option>
        <Option value='Closed'>Closed</Option>
      </Select>
      <Select
        mode='multiple'
        placeholder='Filter by Severity'
        onChange={onSeverityChange}
        style={{ minWidth: 200 }}
      >
        <Option value='Low'>Low</Option>
        <Option value='Medium'>Medium</Option>
        <Option value='High'>High</Option>
      </Select>
    </FilterContainer>
  );
}

export default FilterBar;

import { Button as AntButton } from 'antd';
import styled from 'styled-components';

export const Button = styled(AntButton)`
  box-shadow: none;
  font-weight: 400;
  display: flex;
  align-items: center;
  border-radius: 4px;
  &.ant-btn-primary {
    &:not(:disabled):active {
      background-color: var(--primary);
    }
    &:disabled {
      border-color: rgba(var(--neutral-300-rgb), 0.3);
    }
  }
  &.ant-btn-default,
  &.ant-btn-dashed {
    &:not(:disabled):active {
      color: var(--primary);
      border-color: var(--primary);
    }
  }
  /* &:not(.ant-btn-icon-only) {
    & > .ant-btn-icon {
      &:not(:last-child) {
        margin-inline-start: 8px 0;
      }
    }
  } */
  &.ant-btn-text {
    height: auto;
    border-radius: 0;
    /* color: var(--black); */
    &:not(:disabled):active {
      background-color: transparent;
      border-color: transparent;
      outline: none;
    }
    &:not([class*=' py-']) {
      padding-block: 0;
    }
    &:not([class*=' px-']) {
      padding-inline: 0;
    }
    &:hover {
      background-color: transparent;
    }
    &.hover-underline {
      &:hover {
        text-decoration: underline;
      }
    }
    &.hover-bg {
      &:hover {
        background-color: rgba(var(--primary-rgb), 0.07);
      }
    }
    &.active-bg {
      &:hover {
        background-color: rgba(var(--primary-rgb), 0.07);
      }
    }
  }
  &:focus-visible,
  &:not(:disabled):focus-visible {
    outline: 0;
    outline-offset: 0;
  }
  &.ant-btn-text {
    &.bg-hover {
      &:hover {
        background-color: rgba(var(--primary-rgb), 0.1);
      }
    }
  }
  &.btn-icon {
    padding: 0 10px;
    height: 17px;
  }
`;

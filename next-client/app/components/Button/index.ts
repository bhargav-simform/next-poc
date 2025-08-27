import { Button as AntButton } from 'antd';
import styled from 'styled-components';

export const Button = styled(AntButton)`
  && {
    box-shadow: none;
    font-weight: 400;
    display: flex;
    align-items: center;
    border-radius: 4px;

    /* 🔹 Solid / Primary Button */
    &.ant-btn-primary {
      background: ${({ theme }) => theme.colors.button.solid.background};
      color: ${({ theme }) => theme.colors.button.solid.color};
      border-color: ${({ theme }) => theme.colors.button.solid.border};

      &:hover {
        background: #0056b3; /* you can also use theme if you define hover colors */
        border-color: #0056b3;
      }

      &:not(:disabled):active {
        background: ${({ theme }) => theme.colors.button.solid.background};
      }

      &:disabled {
        border-color: rgba(0, 0, 0, 0.1);
        background: ${({ theme }) => theme.colors.background};
        color: rgba(0, 0, 0, 0.25);
      }
    }

    /* 🔹 Outline & Dashed */
    &.ant-btn-default,
    &.ant-btn-dashed {
      background: ${({ theme }) => theme.colors.button.outline.background};
      color: ${({ theme }) => theme.colors.button.outline.color};
      border-color: ${({ theme }) => theme.colors.button.outline.border};

      &:hover {
        color: #0056b3;
        border-color: #0056b3;
      }

      &:not(:disabled):active {
        color: ${({ theme }) => theme.colors.button.outline.color};
        border-color: ${({ theme }) => theme.colors.button.outline.border};
      }

      &:disabled {
        border-color: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.25);
        background: ${({ theme }) => theme.colors.background};
      }
    }

    /* 🔹 Text buttons */
    &.ant-btn-text {
      height: auto;
      border-radius: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        background-color: rgba(0, 123, 255, 0.07);
      }

      &:active {
        background-color: rgba(0, 123, 255, 0.1);
      }
    }

    /* 🔹 Icon button style */
    &.btn-icon {
      padding: 0 10px;
      height: 17px;
    }
  }
`;

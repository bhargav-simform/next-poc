'use client';

import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

interface LoadingFallbackProps {
  size?: 'small' | 'default' | 'large';
  minHeight?: string;
  padding?: string;
  background?: string;
  message?: string;
}

const LoadingContainer = styled.div<{
  $minHeight: string;
  $padding: string;
  $background: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => props.$minHeight};
  padding: ${(props) => props.$padding};
  background: ${(props) => props.$background};
  gap: 16px;
`;

const LoadingMessage = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

export default function LoadingFallback({
  size = 'large',
  minHeight = '200px',
  padding = '24px',
  background = 'transparent',
  message,
}: LoadingFallbackProps) {
  return (
    <LoadingContainer
      $minHeight={minHeight}
      $padding={padding}
      $background={background}
    >
      <Spin size={size} />
      {message && <LoadingMessage>{message}</LoadingMessage>}
    </LoadingContainer>
  );
}

// ✅ Export reusable variants
export const LoadingVariants = {
  FullPage: ({ message }: { message?: string }) => (
    <LoadingFallback
      size="large"
      minHeight="100vh"
      padding="24px"
      background="#f5f5f5"
      message={message}
    />
  ),

  PageContent: ({ message }: { message?: string }) => (
    <LoadingFallback
      size="large"
      minHeight="400px"
      padding="24px"
      message={message}
    />
  ),

  Component: ({ message }: { message?: string }) => (
    <LoadingFallback
      size="default"
      minHeight="200px"
      padding="16px"
      message={message}
    />
  ),

  Small: ({ message }: { message?: string }) => (
    <LoadingFallback
      size="small"
      minHeight="100px"
      padding="12px"
      message={message}
    />
  ),

  Editor: () => (
    <LoadingFallback
      size="default"
      minHeight="200px"
      padding="16px"
      background="#fafafa"
    />
  ),

  Table: () => (
    <LoadingFallback
      size="large"
      minHeight="300px"
      padding="24px"
      message="Loading data..."
    />
  ),

  Modal: () => (
    <LoadingFallback
      size="default"
      minHeight="150px"
      padding="20px"
      message="Loading..."
    />
  ),
};

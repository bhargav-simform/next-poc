import React from 'react';
import { Spin } from 'antd';

interface ServerLoadingFallbackProps {
  size?: 'small' | 'default' | 'large';
  minHeight?: string;
  padding?: string;
  background?: string;
  message?: string;
}

export default function ServerLoadingFallback({
  size = 'large',
  minHeight = '200px',
  padding = '24px',
  background = 'transparent',
  message
}: ServerLoadingFallbackProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight,
        padding,
        background,
        gap: '16px'
      }}
    >
      <Spin size={size} />
      {message && (
        <div
          style={{
            color: '#666',
            fontSize: '14px',
            textAlign: 'center'
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

// ✅ Export server-compatible loading variants
export const ServerLoadingVariants = {
  FullPage: ({ message }: { message?: string }) => (
    <ServerLoadingFallback
      size="large"
      minHeight="100vh"
      padding="24px"
      background="#f5f5f5"
      message={message}
    />
  ),

  PageContent: ({ message }: { message?: string }) => (
    <ServerLoadingFallback
      size="large"
      minHeight="400px"
      padding="24px"
      message={message}
    />
  ),

  Component: ({ message }: { message?: string }) => (
    <ServerLoadingFallback
      size="default"
      minHeight="200px"
      padding="16px"
      message={message}
    />
  ),

  Small: ({ message }: { message?: string }) => (
    <ServerLoadingFallback
      size="small"
      minHeight="100px"
      padding="12px"
      message={message}
    />
  ),

  Editor: () => (
    <ServerLoadingFallback
      size="default"
      minHeight="200px"
      padding="16px"
      background="#fafafa"
    />
  ),

  Table: () => (
    <ServerLoadingFallback
      size="large"
      minHeight="300px"
      padding="24px"
      message="Loading data..."
    />
  ),

  Modal: () => (
    <ServerLoadingFallback
      size="default"
      minHeight="150px"
      padding="20px"
      message="Loading..."
    />
  )
};

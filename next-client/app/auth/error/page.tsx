'use client';

import React from 'react';
import { Result, Button } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (errorCode: string | null) => {
    switch (errorCode) {
      case 'CredentialsSignin':
        return 'Invalid email or password. Please try again.';
      case 'AccessDenied':
        return 'Access denied. You do not have permission to access this resource.';
      case 'Verification':
        return 'Verification failed. Please try again.';
      default:
        return 'An authentication error occurred. Please try again.';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5',
      padding: '20px'
    }}>
      <Result
        status="error"
        title="Authentication Error"
        subTitle={getErrorMessage(error)}
        extra={[
          <Button
            type="primary"
            key="signin"
            onClick={() => router.push('/auth/signin')}
          >
            Go to Sign In
          </Button>,
          <Button
            key="home"
            onClick={() => router.push('/')}
          >
            Go Home
          </Button>
        ]}
      />
    </div>
  );
}

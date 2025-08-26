'use client';

import React from 'react';
import type { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service

    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button type='button' onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;

'use client';

import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import ThemeProvider from '../../styles/ThemeProvider';
import SessionProvider from './SessionProvider';
import { client } from '../lib/apollo-client';
import { LoadingVariants } from './LoadingFallback';

interface ClientProvidersProps {
  children: ReactNode;
}



export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <SessionProvider>
      <StyleProvider hashPriority='high'>
        <ConfigProvider>
          <ApolloProvider client={client}>
            <ThemeProvider>
              <Suspense fallback={<LoadingVariants.FullPage message="Initializing application..." />}>
                {children}
              </Suspense>
            </ThemeProvider>
          </ApolloProvider>
        </ConfigProvider>
      </StyleProvider>
    </SessionProvider>
  );
}

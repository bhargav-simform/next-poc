'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import ThemeProvider from '../../styles/ThemeProvider';
import { client } from '../lib/apollo-client';

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider>
        <ApolloProvider client={client}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ApolloProvider>
      </ConfigProvider>
    </StyleProvider>
  );
}

'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import '@ant-design/v5-patch-for-react-19';
import { LoadingVariants } from '../components/LoadingFallback';

const Layout = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;



export default function IssuesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Layout>
      <Suspense fallback={<LoadingVariants.FullPage message="Loading issues..." />}>
        {children}
      </Suspense>
    </Layout>
  );
}

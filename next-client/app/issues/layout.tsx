'use client';

import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export default function IssuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}

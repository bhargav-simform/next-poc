'use client';

import React from 'react';
import styled from 'styled-components';
import '@ant-design/v5-patch-for-react-19';


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

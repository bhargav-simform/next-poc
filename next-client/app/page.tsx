'use client';

import { useSession } from 'next-auth/react';
import { Card, Typography, Space, Button, Row, Col } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import styled from 'styled-components';
import { LoadingVariants } from './components/LoadingFallback';

const { Title, Paragraph, Text } = Typography;

const PageWrapper = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;

  h1 {
    color: #1890ff;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: #666;
  }
`;

const StyledCard = styled(Card)`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .anticon {
    font-size: 48px;
    color: #1890ff;
    margin-bottom: 16px;
  }
`;

const CenteredRow = styled(Row)`
  margin-bottom: 48px;
  justify-content: center;
`;

const StatusCard = styled(Card)`
  background: #f6ffed;
  border: 1px solid #b7eb8f;

  h4 {
    color: #52c41a;
    margin-bottom: 16px;
  }
`;

const CenteredButtonWrapper = styled.div`
  text-align: center;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  height: 48px;
  padding: 0 32px;
`;



function SessionContent() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Paragraph>
        <Text type="secondary">Checking authentication...</Text>
      </Paragraph>
    );
  }


  return (
    <>
      <Header>
        <Title level={1}>Welcome to Issue Tracker</Title>
        <Paragraph>
          {session ? (
            <>
              Hello <Text strong>{session.user.name}</Text>! You're successfully authenticated.
            </>
          ) : (
            'Please sign in to access the application.'
          )}
        </Paragraph>
      </Header>

      {session && (
        <>
          <CenteredRow gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <StyledCard hoverable onClick={() => router.push('/issues')}>
                <FileTextOutlined />
                <Title level={4}>Manage Issues</Title>
                <Paragraph>View, create, and manage project issues</Paragraph>
              </StyledCard>
            </Col>
          </CenteredRow>

          <StatusCard>
            <Title level={4}>Authentication Status</Title>
            <Space direction="vertical" size="small">
              <Text>
                <strong>Email:</strong> {session.user.email}
              </Text>
              <Text>
                <strong>Status:</strong> <Text type="success">Authenticated</Text>
              </Text>
            </Space>
          </StatusCard>
        </>
      )}

      {!session && (
        <CenteredButtonWrapper>
          <StyledButton
            type="primary"
            size="large"
            onClick={() => router.push('/auth/signin')}
          >
            Sign In to Continue
          </StyledButton>
        </CenteredButtonWrapper>
      )}
    </>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      <Suspense fallback={<LoadingVariants.Component message="Loading session..." />}>
        <SessionContent />
      </Suspense>
    </PageWrapper>
  );
}

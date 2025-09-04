'use client';

import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

const { Title, Text } = Typography;

interface LoginFormValues {
  email: string;
  password: string;
}

// Container
const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FormWrapper = styled.div`
  background: var(--white);
  border: 1px solid var(--neutral-100);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(var(--black-rgb), 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const PageContainer = styled.section`
  background: var(--gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default function LoginForm() {
  const router = useRouter();
  const [form] = Form.useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginFormValues) => {
    const { email, password } = values;
    setLoading(true);

    try {
      const response: any = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (!response?.error) {
        toast.success('Login Successfull!');
        router.push('/');
        router.refresh();
      } else {
        console.log('called');
        toast.error('Check your credentials');
      }
    } catch (error: any) {
      toast.error(error?.message ?? 'Check your credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <FormWrapper>
          <HeaderSection>
            <Title level={2} style={{ margin: 0, color: 'var(--neutral-500)' }}>
              Welcome Back
            </Title>
            <Text style={{ color: 'var(--neutral-300)' }}>Sign in to your account to continue</Text>
          </HeaderSection>

          <Form<LoginFormValues>
            form={form}
            name='login'
            onFinish={onFinish}
            layout='vertical'
            size='large'
          >
            <Form.Item
              label='Email Address'
              name='email'
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Invalid email address!' },
              ]}
            >
              <Input
                placeholder='Enter your email address'
                prefix={<MailOutlined style={{ color: 'var(--neutral-300)' }} />}
              />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please enter your password!' },
                { min: 6, message: 'Password must be at least 6 characters.' },
              ]}
            >
              <Input.Password
                placeholder='Enter your password'
                prefix={<LockOutlined style={{ color: 'var(--neutral-300)' }} />}
              />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' loading={loading} block>
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </FormContainer>
    </PageContainer>
  );
}

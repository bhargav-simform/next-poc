'use client';

import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { Issue, IssueFormData } from '@/app/types/issue';
import { localStorageService } from '@/app/services/localStorageService';
import IssueDrawer from '@/app/components/drawers/IssueDrawer';

interface Props {
  params: {
    id: string;
  };
}

export default function EditIssuePage({ params }: Props) {
  const router = useRouter();
  const [issue, setIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadIssue = () => {
      const issues = localStorageService.getIssues();
      const foundIssue = issues.find((i: Issue) => i.id === params.id);
      if (foundIssue) {
        setIssue(foundIssue);
      } else {
        message.error('Issue not found');
        router.push('/issues');
      }
      setLoading(false);
    };

    loadIssue();
  }, [params.id, router]);

  const handleSubmit = async (values: IssueFormData) => {
    setIsSubmitting(true);
    try {
      const updatedIssue = {
        ...values,
        id: params.id,
        createdDate: issue!.createdDate,
      };
      localStorageService.updateIssue(updatedIssue);
      message.success('Issue updated successfully');
      router.push('/issues');
    } catch (error) {
      message.error('Failed to update issue');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!issue) {
    return null;
  }

  if (!params.id) return null;

  return (
    <IssueDrawer
      initialValues={issue}
      onSubmit={handleSubmit}
      onClose={() => router.push('/issues')}
      isModalVisible
      isLoading={isSubmitting}
    />
  );
}

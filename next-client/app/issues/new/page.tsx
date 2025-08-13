'use client';

import React from 'react';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import IssueForm from '@/app/components/forms/IssueForm';
import { IssueFormData } from '@/app/types/issue';
import { localStorageService } from '@/app/services/localStorageService';

export default function NewIssuePage() {
  const router = useRouter();

  const handleSubmit = async (values: IssueFormData) => {
    try {
      const newIssue = {
        ...values,
        id: uuidv4(),
        createdDate: new Date().toISOString(),
      };
      localStorageService.saveIssue(newIssue);
      message.success('Issue created successfully');
      router.push('/issues');
    } catch (error) {
      message.error('Failed to create issue');
      console.error(error);
    }
  };

  return <IssueForm onSubmit={handleSubmit} />;
}

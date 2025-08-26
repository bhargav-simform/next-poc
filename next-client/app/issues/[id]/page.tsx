import React from 'react';
import IssueDetailsPage from '@/app/components/issues/IssueDetailsPage';
import { after } from 'next/server';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.ReactElement> {
  after(() => {
    console.log('IssuesPage mounted for testing');
  });

  const { id: issueId } = await params;

  return <IssueDetailsPage issueId={issueId} />;
}

import React, { Suspense } from 'react';
import IssueDetailsPage from '@/app/components/issues/IssueDetailsPage';
import { after } from 'next/server';
import { ServerLoadingVariants } from '@/app/components/ServerLoadingFallback';



export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.ReactElement> {
  after(() => {
    console.log('IssuesPage mounted for testing');
  });

  const { id: issueId } = await params;

  return (
    <Suspense fallback={<ServerLoadingVariants.PageContent message="Loading issue details..." />}>
      <IssueDetailsPage issueId={issueId} />
    </Suspense>
  );
}

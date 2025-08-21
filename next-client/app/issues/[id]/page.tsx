import IssueDetailsPage from '@/app/components/issues/IssueDetailsPage';

export default async function Page({
  params,
}: {
  params: { id: string };
}): Promise<React.ReactElement> {
  const { id: issueId } = params;

  return <IssueDetailsPage issueId={issueId} />;
}

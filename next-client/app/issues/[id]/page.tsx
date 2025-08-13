import IssueDetailsPage from '@/app/components/issues/IssueDetailsPage';

export default function Page({ params }: { params: { id: string } }) {

  const issueId = params.id;

  return <IssueDetailsPage issueId={issueId} />;
}

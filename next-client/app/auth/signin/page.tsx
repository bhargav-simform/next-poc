import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import LoginForm from './form';
import { ServerLoadingVariants } from '../../components/ServerLoadingFallback';

export default async function LoginPage() {
  const session = await getServerSession();

  console.log({ session });

  if (session) {
    redirect('/');
  }

  return (
    <Suspense fallback={<ServerLoadingVariants.FullPage message='Loading login...' />}>
      <LoginForm />
    </Suspense>
  );
}

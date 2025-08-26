'use client';

import { myAction } from '@/app/actions';
import { useActionState } from 'react';
// import Form from 'next/form'

export default function NextForm() {
  const [state, formAction] = useActionState(
    async (_prevState: { success: boolean }, formData: FormData) => {
      return myAction(formData);
    },
    { success: false, query: '' },
  );

  return (
    <div>
      <h1>Next Form Page</h1>
      <p>This is a placeholder for the </p>
      {/* <Form action="/search" formAction={}> */}
      <form action={formAction}>
        <input name='query' />
        <button type='submit'>Submit</button>
      </form>
      {state.success && <p>✅ Submitted successfully!</p>}
    </div>
  );
}

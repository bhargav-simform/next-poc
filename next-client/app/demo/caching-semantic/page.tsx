// export const dynamic = 'force-dynamic'

import { fetchCached, fetchForceCached, fetchUncached } from '@/app/actions';

export default async function Page() {
  const cached = await fetchCached();
  const forceCached = await fetchForceCached();
  const unCached = await fetchUncached();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Next.js 15 Caching Demo</h2>
      <pre>Revalidate 60s: {JSON.stringify(cached)}</pre>
      <pre>Force Cache: {JSON.stringify(forceCached)}</pre>
      <pre>No Store: {JSON.stringify(unCached)}</pre>
    </div>
  );
}

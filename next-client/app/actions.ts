'use server';

export const fetchCached = async () => {
  const cached = await fetch('http://localhost:3000/api/random', {
    next: { revalidate: 60 },
  }).then((r) => r.json());

  return cached;
};

export const fetchForceCached = async () => {
  const forceCached = await fetch('http://localhost:3000/api/random', {
    cache: 'force-cache',
  }).then((r) => r.json());
  return forceCached;
};

export const fetchUncached = async () => {
  const uncached = await fetch('http://localhost:3000/api/random', {
    cache: 'no-store',
  }).then((r) => r.json());

  return uncached;
};

export async function myAction(formData: FormData) {
  const query = formData.get('query');
  return { success: true, query };
}

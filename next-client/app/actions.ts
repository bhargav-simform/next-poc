export async function safeFetch(url: string, options?: RequestInit) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      // Instead of parsing JSON blindly, return error info
      return { error: `Request failed with ${res.status}`, body: await res.text() };
    }

    return await res.json();
  } catch (e) {
    if (e instanceof Error) {
      return { error: 'Invalid JSON', body: e.message };
    }
    return { error: 'Invalid JSON', body: '' };
  }
}

export async function fetchCached() {
  return safeFetch('hhttp://localhost:3000/api/random', { cache: 'force-cache' });
}

export async function fetchForceCached() {
  return safeFetch('hhttp://localhost:3000/api/random', { next: { revalidate: 60 } });
}

export async function fetchUncached() {
  return safeFetch('hhttp://localhost:3000/api/random', { cache: 'no-store' });
}

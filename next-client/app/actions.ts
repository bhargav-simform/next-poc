export const baseUrl = process.env.NEXTAUTH_URL;

export async function myAction(formData: FormData) {
  const query = formData.get('query');
  return { success: true, query };
}

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
  console.log(baseUrl, 'baseUrl');

  return safeFetch(`${baseUrl}/api/random`, { cache: 'force-cache' });
}

export async function fetchForceCached() {
  return safeFetch(`${baseUrl}/api/random`, { next: { revalidate: 60 } });
}

export async function fetchUncached() {
  return safeFetch(`${baseUrl}/api/random`, { cache: 'no-store' });
}

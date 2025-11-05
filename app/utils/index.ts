export async function get(endpoint: string) {
  const res = await fetch(endpoint, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export async function post(endpoint: string, content: object) {
  const body = JSON.stringify(content);
  await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
}

export function replaceAtIndex(array: unknown[], index: number, item: unknown) {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

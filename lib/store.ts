// In-memory visit store — resets on cold starts but captures recent traffic

export interface Visit {
  page: string;
  ts: number;        // unix ms
  ref: string;       // referrer
  ua: string;        // user-agent snippet
}

// Attach to globalThis so it survives hot-reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var __visits: Visit[] | undefined;
}

export function getStore(): Visit[] {
  if (!globalThis.__visits) globalThis.__visits = [];
  return globalThis.__visits;
}

export function recordVisit(v: Visit) {
  const store = getStore();
  store.push(v);
  // Keep last 500 visits only
  if (store.length > 500) store.splice(0, store.length - 500);
}

export function getVisits(): Visit[] {
  return getStore().slice().reverse(); // newest first
}

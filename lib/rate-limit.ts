/**
 * Tiny in-memory, fixed-window rate limiter.
 *
 * On serverless this is best-effort (per warm instance) — it's a cheap first
 * line of defence against accidental double-submits and trivial spam, layered
 * on top of the honeypot field. For hardened limiting, front with a platform
 * WAF or a shared store (e.g. Upstash) later.
 */
const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 5; // per window per key

type Entry = { count: number; resetAt: number };
const store = new Map<string, Entry>();

export function rateLimit(key: string, max = MAX_HITS, windowMs = WINDOW_MS): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= max) return false;

  entry.count += 1;
  return true;
}

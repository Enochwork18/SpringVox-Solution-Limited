const HTML_TAG_RE = /<[^>]*>/g

export function sanitize(input: string): string {
  return input.replace(HTML_TAG_RE, '').trim()
}

export function sanitizeAll<T extends Record<string, unknown>>(obj: T): T {
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(obj)) {
    result[key] = typeof value === 'string' ? sanitize(value) : value
  }
  return result as T
}

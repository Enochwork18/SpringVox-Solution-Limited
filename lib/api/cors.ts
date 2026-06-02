import { NextResponse } from "next/server";

const ALLOWED_ORIGINS = [
  "https://springvoxsl.com",
  "http://localhost:3000",
];

export function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowed =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export function handleOptions(origin: string | null) {
  const headers = getCorsHeaders(origin);
  return new NextResponse(null, { status: 204, headers });
}

export function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin);
}

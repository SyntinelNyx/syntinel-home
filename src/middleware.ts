import type { NextRequest } from "next/server";

const rateLimitMap = new Map();
const limit = 3;
const time = 60 * 1000;

export function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.ip;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipInfo = rateLimitMap.get(ip);
  if (Date.now() - ipInfo.lastReset > time) {
    ipInfo.count = 0;
    ipInfo.lastReset = Date.now();
  }

  if (ipInfo.count >= limit) {
    return new Response("Too Many Requests", {
      status: 429,
    });
  }

  ipInfo.count += 1;
}

export const config = {
  matcher: "/api/discord-webhook",
};

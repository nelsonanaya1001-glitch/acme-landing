import { NextRequest, NextResponse } from "next/server";
import { recordVisit } from "@/lib/store";

export async function POST(req: NextRequest) {
  const { page } = await req.json();
  const ua = req.headers.get("user-agent") ?? "";
  const ref = req.headers.get("referer") ?? "direct";

  // Skip bots
  if (/bot|crawler|spider|crawling/i.test(ua)) {
    return NextResponse.json({ ok: true });
  }

  recordVisit({
    page: page ?? "/",
    ts: Date.now(),
    ref,
    ua: ua.slice(0, 80),
  });

  return NextResponse.json({ ok: true });
}

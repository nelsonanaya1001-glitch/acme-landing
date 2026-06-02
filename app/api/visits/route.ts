import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getVisits } from "@/lib/store";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  if (cookieStore.get("admin_session")?.value !== "admin_authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const visits = getVisits();
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * oneHour;

  // Online now = visited in last 3 minutes
  const onlineNow = visits.filter(v => now - v.ts < 3 * 60 * 1000).length;
  const last24h  = visits.filter(v => now - v.ts < oneDay).length;
  const lastHour = visits.filter(v => now - v.ts < oneHour).length;

  // Hourly buckets for last 24h chart
  const hourly = Array.from({ length: 24 }, (_, i) => {
    const start = now - (23 - i) * oneHour;
    const end   = start + oneHour;
    return visits.filter(v => v.ts >= start && v.ts < end).length;
  });

  // Top pages
  const pageCounts: Record<string, number> = {};
  visits.forEach(v => { pageCounts[v.page] = (pageCounts[v.page] ?? 0) + 1; });
  const topPages = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return NextResponse.json({ onlineNow, last24h, lastHour, hourly, topPages, recent: visits.slice(0, 20) });
}

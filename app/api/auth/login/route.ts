import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD ?? "elbarullo2024";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password !== CLIENT_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("client_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return NextResponse.json({ ok: true });
}

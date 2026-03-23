import { NextRequest, NextResponse } from "next/server";
import Database from "@replit/database";

const db = new Database();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();
    const key = `email:${normalised}`;
    await db.set(key, { email: normalised, createdAt: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("subscribe error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

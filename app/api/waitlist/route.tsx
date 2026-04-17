import { db } from "@/lib";
import { waitlist } from "@/lib/db/waitlist";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, company, email, phone, interested, other } = body;

  try {
    const result = await db
      .select({ count: waitlist.id })
      .from(waitlist)
      .where(eq(waitlist.phone, phone));
    const exists = (result[0]?.count ?? 0) > 0;
    if (!exists) {
      await db
        .insert(waitlist)
        .values({ name, company, email, phone, interested, other });
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "You’re already on the Kartexpress waitlist. We’ll contact you shortly with next steps.",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json("Server error, try again");
  }
}

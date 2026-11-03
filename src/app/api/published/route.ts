import { connection } from "next/server";
import { NextResponse } from "next/server";
import { getPublished, getPublishedFallback } from "@/lib/published";

export async function GET() {
  await connection();

  try {
    const published = await getPublished();
    return NextResponse.json(published, {
      headers: {
        "Cache-Control": "s-maxage=10, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    console.error("Safe Wheels CMS API:", error);
    return NextResponse.json(getPublishedFallback(), {
      headers: {
        "Cache-Control": "s-maxage=10, stale-while-revalidate=30",
      },
    });
  }
}

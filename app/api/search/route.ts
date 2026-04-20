import { NextResponse } from "next/server";
import { searchIndex } from "@/lib/site-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const results = !query
    ? searchIndex.slice(0, 10)
    : searchIndex.filter((item) =>
        `${item.title} ${item.summary} ${item.category}`.toLowerCase().includes(query)
      );

  return NextResponse.json({ results });
}

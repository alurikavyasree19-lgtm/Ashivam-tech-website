import { NextResponse } from "next/server";
import { getHealthStatus } from "@/lib/db";

export async function GET() {
  try {
    const health = await getHealthStatus();
    return NextResponse.json(health, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Service unhealthy";
    return NextResponse.json(
      { status: "DEGRADED", error: errorMessage },
      { status: 500 }
    );
  }
}

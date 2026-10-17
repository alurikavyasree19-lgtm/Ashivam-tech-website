import { NextRequest, NextResponse } from "next/server";
import { createInquiry } from "@/lib/db";
import { sendInquiryNotification } from "@/lib/email";

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function handleContactPost(req: NextRequest) {
  try {
    const ipAddress =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ipAddress)) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit reached. Please wait a few minutes before submitting another inquiry.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, company, classification, domain, investment, overview } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Client name is required." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be under 100 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid business email address is required (e.g. name@company.com)." },
        { status: 400 }
      );
    }

    if (email.length > 150) {
      return NextResponse.json(
        { success: false, error: "Email must be under 150 characters." },
        { status: 400 }
      );
    }

    if (company && typeof company === "string" && company.length > 150) {
      return NextResponse.json(
        { success: false, error: "Company name must be under 150 characters." },
        { status: 400 }
      );
    }

    if (!overview || typeof overview !== "string" || overview.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide at least 10 characters describing your project requirements.",
        },
        { status: 400 }
      );
    }

    if (overview.length > 3000) {
      return NextResponse.json(
        { success: false, error: "Project description must be under 3000 characters." },
        { status: 400 }
      );
    }

    const savedInquiry = await createInquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || "",
      classification: classification || "Enterprise Web Application",
      domain: domain || "Education Technology",
      investment: investment || "Not Sure Yet / Early Phase",
      overview: overview.trim(),
      ipAddress,
    });

    const emailDispatch = await sendInquiryNotification(savedInquiry);

    return NextResponse.json({
      success: true,
      message: "Telemetry received. Our architectural team will transmit a response shortly.",
      inquiry: {
        id: savedInquiry.id,
        createdAt: savedInquiry.createdAt,
        status: savedInquiry.status,
      },
      emailDispatch: {
        mode: emailDispatch.mode,
        messageId: emailDispatch.messageId,
      },
    });
  } catch (error: unknown) {
    console.error("API /api/contact error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

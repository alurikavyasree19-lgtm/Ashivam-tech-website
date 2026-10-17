import { NextRequest, NextResponse } from "next/server";
import { getInquiries, updateInquiryStatus } from "@/lib/db";
import { verifyToken } from "@/lib/auth";

function checkAuth(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.substring(7);
  return verifyToken(token);
}

export async function GET(req: NextRequest) {
  const session = checkAuth(req);
  if (!session) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access." },
      { status: 401 }
    );
  }

  try {
    const list = await getInquiries();
    return NextResponse.json({
      success: true,
      inquiries: list,
      count: list.length,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error fetching inquiries";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const session = checkAuth(req);
  if (!session) {
    return NextResponse.json(
      { success: false, error: "Unauthorized access." },
      { status: 401 }
    );
  }

  try {
    const { id, status } = await req.json();
    if (!id || !["pending", "reviewed", "contacted"].includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid inquiry ID or status." },
        { status: 400 }
      );
    }

    const updated = await updateInquiryStatus(id, status);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Inquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      inquiry: updated,
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error updating inquiry";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

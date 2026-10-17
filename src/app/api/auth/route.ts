import { NextRequest, NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/db";
import { createToken, verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password required." },
        { status: 400 }
      );
    }

    const admin = await authenticateAdmin(username, password);
    if (!admin) {
      return NextResponse.json(
        { success: false, error: "Invalid administrative credentials." },
        { status: 401 }
      );
    }

    const token = createToken(admin.id, admin.username, admin.role);

    return NextResponse.json({
      success: true,
      token,
      user: {
        id: admin.id,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Authentication error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { success: false, error: "Missing authorization token." },
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);
  const session = verifyToken(token);

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Invalid or expired token." },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    user: session,
  });
}

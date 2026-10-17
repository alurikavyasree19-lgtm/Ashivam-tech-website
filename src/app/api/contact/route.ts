import { NextRequest } from "next/server";
import { handleContactPost } from "@/lib/contact-api";

export async function POST(req: NextRequest) {
  return handleContactPost(req);
}

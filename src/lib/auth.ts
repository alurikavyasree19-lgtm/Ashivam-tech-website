import crypto from "crypto";

function getSecret(): string {
  return process.env.AUTH_SECRET || "ashivam-technologics-auth-secret-key-default";
}

export interface SessionPayload {
  userId: string;
  username: string;
  role: string;
  exp: number;
}

export function createToken(userId: string, username: string, role: string): string {
  const payload: SessionPayload = {
    userId,
    username,
    role,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
  };

  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(data)
    .digest("base64url");

  return `${data}.${signature}`;
}

export function verifyToken(token: string): SessionPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;

    const [data, signature] = parts;
    const expected = crypto
      .createHmac("sha256", getSecret())
      .update(data)
      .digest("base64url");

    if (signature !== expected) return null;

    const payload: SessionPayload = JSON.parse(
      Buffer.from(data, "base64url").toString("utf-8")
    );

    if (Date.now() > payload.exp) return null;

    return payload;
  } catch {
    return null;
  }
}

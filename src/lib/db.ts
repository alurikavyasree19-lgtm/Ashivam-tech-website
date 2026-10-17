import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export interface Inquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company: string;
  classification: string;
  domain: string;
  investment: string;
  overview: string;
  status: "pending" | "reviewed" | "contacted";
  ipAddress?: string;
}

export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  salt: string;
  role: "superadmin" | "lead_architect";
  createdAt: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  details: string;
}

export interface DatabaseSchema {
  inquiries: Inquiry[];
  admins: AdminUser[];
  auditLogs: AuditLog[];
  meta: {
    version: string;
    initializedAt: string;
    lastSaved: string;
  };
}

const DB_PATH = path.join(process.cwd(), "data", "database.json");

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
}

async function ensureDb(): Promise<DatabaseSchema> {
  const dir = path.dirname(DB_PATH);
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    // dir exists
  }

  try {
    const raw = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    // Seed database with default admin and initial enterprise record
    const defaultSalt = crypto.randomBytes(16).toString("hex");
    const defaultHash = hashPassword("ashivam2026!", defaultSalt);

    const initialDb: DatabaseSchema = {
      inquiries: [
        {
          id: `INQ-${new Date().getFullYear()}-1001`,
          createdAt: new Date().toISOString(),
          name: "Siddharth Rao",
          email: "siddharth@nexastep.io",
          company: "NexaStep Technologies",
          classification: "Enterprise Web Application",
          domain: "Education Technology",
          investment: "₹2L – ₹10L (Enterprise Scale)",
          overview:
            "Requirement for real-time exam telemetry dashboard and distributed attendance portal for higher education institutions.",
          status: "reviewed",
        },
      ],
      admins: [
        {
          id: "adm-001",
          username: "admin",
          passwordHash: defaultHash,
          salt: defaultSalt,
          role: "superadmin",
          createdAt: new Date().toISOString(),
        },
      ],
      auditLogs: [
        {
          id: `LOG-${Date.now()}`,
          timestamp: new Date().toISOString(),
          action: "SYSTEM_INIT",
          details: "Ashivam Enterprise Backend database initialized successfully.",
        },
      ],
      meta: {
        version: "2.4.0",
        initializedAt: new Date().toISOString(),
        lastSaved: new Date().toISOString(),
      },
    };

    await fs.writeFile(DB_PATH, JSON.stringify(initialDb, null, 2), "utf-8");
    return initialDb;
  }
}

export async function getDb(): Promise<DatabaseSchema> {
  return ensureDb();
}

export async function saveDb(data: DatabaseSchema): Promise<void> {
  data.meta.lastSaved = new Date().toISOString();
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function createInquiry(
  input: Omit<Inquiry, "id" | "createdAt" | "status">
): Promise<Inquiry> {
  const db = await getDb();
  const id = `INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const inquiry: Inquiry = {
    ...input,
    id,
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  db.inquiries.unshift(inquiry);
  db.auditLogs.unshift({
    id: `LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    action: "INQUIRY_RECEIVED",
    details: `Inquiry ${id} from ${inquiry.name} (${inquiry.email})`,
  });

  await saveDb(db);
  return inquiry;
}

export async function getInquiries(): Promise<Inquiry[]> {
  const db = await getDb();
  return db.inquiries;
}

export async function updateInquiryStatus(
  id: string,
  status: "pending" | "reviewed" | "contacted"
): Promise<Inquiry | null> {
  const db = await getDb();
  const item = db.inquiries.find((i) => i.id === id);
  if (!item) return null;

  item.status = status;
  db.auditLogs.unshift({
    id: `LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    action: "INQUIRY_STATUS_UPDATE",
    details: `Inquiry ${id} status updated to ${status}`,
  });

  await saveDb(db);
  return item;
}

export async function authenticateAdmin(
  username: string,
  passwordAttempt: string
): Promise<AdminUser | null> {
  const db = await getDb();
  const admin = db.admins.find((a) => a.username.toLowerCase() === username.toLowerCase());
  if (!admin) return null;

  const attemptHash = hashPassword(passwordAttempt, admin.salt);
  if (attemptHash === admin.passwordHash) {
    db.auditLogs.unshift({
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: "AUTH_SUCCESS",
      details: `Admin ${username} authenticated successfully.`,
    });
    await saveDb(db);
    return admin;
  }

  db.auditLogs.unshift({
    id: `LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    action: "AUTH_FAILURE",
    details: `Failed authentication attempt for ${username}.`,
  });
  await saveDb(db);
  return null;
}

export async function getHealthStatus() {
  const db = await getDb();
  const uptimeSeconds = process.uptime();
  return {
    status: "ONLINE",
    version: db.meta.version,
    database: {
      type: "Persistent File Store (JSON)",
      path: "data/database.json",
      inquiriesCount: db.inquiries.length,
      auditLogsCount: db.auditLogs.length,
      lastSaved: db.meta.lastSaved,
      connected: true,
    },
    server: {
      uptimeSeconds: Math.floor(uptimeSeconds),
      memoryUsageMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      nodeVersion: process.version,
      environment: process.env.NODE_ENV || "development",
    },
    timestamp: new Date().toISOString(),
  };
}

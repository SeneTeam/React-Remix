import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  // eslint-disable-next-line no-var
  var __db: PrismaClient | undefined;
}

// This is necessary to prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as { __db: PrismaClient | undefined };

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!globalForPrisma.__db) {
    globalForPrisma.__db = new PrismaClient();
  }
  db = globalForPrisma.__db;
}

export { db };

import { env } from "./env";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

const globaleForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globaleForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globaleForPrisma.prisma = prisma;

export { prisma };

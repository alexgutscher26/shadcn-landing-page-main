import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// This prevents multiple instances of Prisma Client in development
const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = prismadb;
}

// Enable query logging in development
if (process.env.NODE_ENV === "development") {
  prismadb.$use(async (params, next) => {
    const before = Date.now();
    const result = await next(params);
    const after = Date.now();
    console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
    return result;
  });
}

// Add error handling middleware
prismadb.$use(async (params, next) => {
  try {
    return await next(params);
  } catch (error) {
    console.error("Prisma Error:", error);
    throw error;
  }
});

export default prismadb;
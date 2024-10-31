import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prisma";
import { User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export async function getCurrentUser() {
  try {
    const session = await auth();
    const userId = session?.userId;

    if (!userId) {
      return null;
    }

    const dbUser = await prismadb.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!dbUser) {
      return null;
    }

    return {
      ...dbUser,
      createdAt: dbUser.createdAt.toISOString(),
      updatedAt: dbUser.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function createUser(userData: {
  clerkId: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  profileImage?: string | null;
}) {
  try {
    const existingUser = await prismadb.user.findUnique({
      where: { clerkId: userData.clerkId },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await prismadb.user.create({
      data: userData,
    });

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export async function updateUser(
  clerkId: string,
  data: Partial<{
    email: string;
    firstName: string | null;
    lastName: string | null;
    profileImage: string | null;
  }>
) {
  try {
    const user = await prismadb.user.update({
      where: { clerkId },
      data,
    });

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await prismadb.user.delete({
      where: { clerkId },
    });
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
}

export async function getUserProfile(clerkId: string) {
  try {
    const user = await prismadb.user.findUnique({
      where: { clerkId },
      include: {
        profile: true,
        posts: {
          select: {
            id: true,
            title: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      posts: user.posts.map((post) => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw new Error("Failed to get user profile");
  }
}

// Type guard to check if user exists
export function isUser(user: SafeUser | null): user is SafeUser {
  return user !== null;
}

// Helper to format error messages
export function formatUserError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
}

// Helper to check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const session = await auth();
  return !!session?.userId;
}
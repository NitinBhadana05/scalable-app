import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { requireAuth } from "@/lib/requireAuth";

/**
 * GET /api/profile
 * Fetch logged-in user's profile
 */
export async function GET() {
  try {
    const { userId } = await requireAuth();
    await connectDB();

    const user = await User.findById(userId).select("name email createdAt");

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }
}

/**
 * PUT /api/profile
 * Update logged-in user's profile
 */
export async function PUT(req: Request) {
  try {
    const { userId } = await requireAuth();
    const body = await req.json();
    await connectDB();

    const { name, email } = body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true, runValidators: true }
    ).select("name email updatedAt");

    return NextResponse.json(updatedUser);
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }
}

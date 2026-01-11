import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const count = await User.countDocuments();
  return NextResponse.json({
    message: "DB connected successfully",
    users: count,
  });
}

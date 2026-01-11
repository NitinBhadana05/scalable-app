import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import { requireAuth } from "@/lib/requireAuth";
import { taskSchema } from "@/lib/validators";

/**
 * GET /api/tasks
 * Fetch all tasks for logged-in user
 */
export async function GET() {
  try {
    const { userId } = await requireAuth();
    await connectDB();

    const tasks = await Task.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json(tasks);
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }
}

/**
 * POST /api/tasks
 * Create a new task
 */
export async function POST(req: Request) {
  try {
    const { userId } = await requireAuth();
    const body = await req.json();

    const parsed = taskSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await connectDB();

    const task = await Task.create({
      title: parsed.data.title,
      userId,
    });

    return NextResponse.json(task, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }
}

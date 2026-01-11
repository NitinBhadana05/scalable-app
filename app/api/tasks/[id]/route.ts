import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Task from "@/models/Task";
import { requireAuth } from "@/lib/requireAuth";

/**
 * DELETE /api/tasks/:id
 */
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await requireAuth();
    const { id } = await context.params;

    await connectDB();

    await Task.findOneAndDelete({
      _id: id,
      userId,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE TASK ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/tasks/:id
 */
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await requireAuth();
    const { id } = await context.params;
    const body = await req.json();

    await connectDB();

    const updated = await Task.findOneAndUpdate(
      { _id: id, userId },
      {
        title: body.title,
        completed: body.completed,
      },
      { new: true }
    );

    return NextResponse.json(updated);
  } catch (error) {
    console.error("UPDATE TASK ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    );
  }
}

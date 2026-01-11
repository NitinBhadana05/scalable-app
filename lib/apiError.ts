import { NextResponse } from "next/server";

export function apiError(
  message = "Something went wrong",
  status = 500
) {
  return NextResponse.json({ error: message }, { status });
}

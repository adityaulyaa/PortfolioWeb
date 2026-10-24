import { NextResponse } from "next/server";
import { SkillService } from "@/services/skill-service";
import { successResponse, errorResponse } from "@/lib/api-response";
import { handleError, MethodNotAllowedError } from "@/lib/errors";

export async function GET() {
  try {
    const skills = await SkillService.getSkillsGroupedByCategory();
    return NextResponse.json(successResponse(skills), { status: 200 });
  } catch (error) {
    const { statusCode, code, message } = handleError(error);
    return NextResponse.json(errorResponse(code, message), {
      status: statusCode,
    });
  }
}

export async function POST() {
  const { statusCode, code, message } = handleError(
    new MethodNotAllowedError()
  );
  return NextResponse.json(errorResponse(code, message), {
    status: statusCode,
  });
}

export async function PUT() {
  const { statusCode, code, message } = handleError(
    new MethodNotAllowedError()
  );
  return NextResponse.json(errorResponse(code, message), {
    status: statusCode,
  });
}

export async function PATCH() {
  const { statusCode, code, message } = handleError(
    new MethodNotAllowedError()
  );
  return NextResponse.json(errorResponse(code, message), {
    status: statusCode,
  });
}

export async function DELETE() {
  const { statusCode, code, message } = handleError(
    new MethodNotAllowedError()
  );
  return NextResponse.json(errorResponse(code, message), {
    status: statusCode,
  });
}
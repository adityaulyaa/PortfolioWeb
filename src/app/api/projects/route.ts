import { NextResponse } from 'next/server';
import { ProjectService } from '@/services/project.service';
import { successResponse, errorResponse } from '@/lib/api-response';
import { handleError } from '@/lib/errors';

export async function GET() {
  try {
    const projects = await ProjectService.getProjectList();
    return NextResponse.json(successResponse(projects), { status: 200 });
  } catch (error) {
    const errorInfo = handleError(error);
    return NextResponse.json(
      errorResponse(errorInfo.code, errorInfo.message),
      { status: errorInfo.statusCode }
    );
  }
}

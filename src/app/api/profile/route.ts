import { NextResponse } from 'next/server';
import { ProfileService } from '@/services/profile.service';
import { successResponse, errorResponse } from '@/lib/api-response';
import { handleError } from '@/lib/errors';

export async function GET() {
  try {
    const profile = await ProfileService.getProfile();
    return NextResponse.json(successResponse(profile), { status: 200 });
  } catch (error) {
    const errorInfo = handleError(error);
    return NextResponse.json(
      errorResponse(errorInfo.code, errorInfo.message),
      { status: errorInfo.statusCode }
    );
  }
}

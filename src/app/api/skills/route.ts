import { NextResponse } from 'next/server';
import { SkillService } from '@/services/skill.service';
import { successResponse } from '@/lib/api-response';

export async function GET() {
  try {
    const skills = await SkillService.getSkillsGroupedByCategory();
    return NextResponse.json(successResponse(skills));
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch skills',
        },
      },
      { status: 500 }
    );
  }
}

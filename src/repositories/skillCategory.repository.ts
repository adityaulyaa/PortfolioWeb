import { prisma } from '@/lib/prisma';

export class SkillCategoryRepository {
  static async getAllCategoriesWithSkills() {
    return await prisma.skillCategory.findMany({
      include: {
        skills: true,
      },
    });
  }
}

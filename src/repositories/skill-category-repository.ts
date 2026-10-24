import { prisma } from "@/lib/prisma";

export class SkillCategoryRepository {
  static async findAllWithSkills() {
    return prisma.skillCategory.findMany({
      orderBy: { displayOrder: "asc" },
      include: {
        skills: {
          orderBy: { displayOrder: "asc" },
        },
      },
    });
  }
}
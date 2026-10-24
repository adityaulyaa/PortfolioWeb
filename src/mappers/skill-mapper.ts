import { SkillCategory } from "@prisma/client";
import { SkillCategoryDto, SkillDto } from "@/types";

export class SkillMapper {
  static toCategoryDto(category: SkillCategory): SkillCategoryDto {
    return {
      id: category.id,
      name: category.name,
      displayOrder: category.displayOrder,
    };
  }

  static toSkillDto(
    skill: {
      id: number;
      name: string;
      displayOrder: number;
      category: { name: string };
    },
  ): SkillDto {
    return {
      id: skill.id,
      name: skill.name,
      displayOrder: skill.displayOrder,
      categoryName: skill.category.name,
    };
  }

  static toSkillWithCategoryDto(
    category: SkillCategory & {
      skills: {
        id: number;
        name: string;
        displayOrder: number;
      }[];
    },
  ): SkillCategoryDto & { skills: SkillDto[] } {
    return {
      id: category.id,
      name: category.name,
      displayOrder: category.displayOrder,
      skills: category.skills
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map((s) => ({
          id: s.id,
          name: s.name,
          displayOrder: s.displayOrder,
          categoryName: category.name,
        })),
    };
  }
}
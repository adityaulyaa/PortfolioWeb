import { SkillCategory, Skill } from '@prisma/client';
import { SkillCategoryDto, SkillDto } from '@/types';

export class SkillMapper {
  static toSkillDto(skill: Skill): SkillDto {
    return {
      id: skill.id,
      name: skill.name,
    };
  }

  static toSkillCategoryDto(
    category: SkillCategory & { skills: Skill[] }
  ): SkillCategoryDto {
    return {
      id: category.id,
      name: category.name,
      skills: category.skills.map(skill => this.toSkillDto(skill)),
    };
  }

  static toSkillCategoriesDto(
    categories: (SkillCategory & { skills: Skill[] })[]
  ): SkillCategoryDto[] {
    return categories.map(category => this.toSkillCategoryDto(category));
  }
}

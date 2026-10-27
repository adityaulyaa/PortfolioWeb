import { SkillCategoryRepository } from '@/repositories/skillCategory.repository';
import { SkillMapper } from '@/mappers/skill.mapper';
import { SkillCategoryDto } from '@/types';

export class SkillService {
  static async getSkillsGroupedByCategory(): Promise<SkillCategoryDto[]> {
    const categories = await SkillCategoryRepository.getAllCategoriesWithSkills();

    // Sort categories by displayOrder
    const sortedCategories = categories.sort(
      (a, b) => a.displayOrder - b.displayOrder
    );

    // Sort skills within each category by displayOrder, and filter out categories without skills
    const categoriesWithSortedSkills = sortedCategories
      .map(category => ({
        ...category,
        skills: category.skills.sort((a, b) => a.displayOrder - b.displayOrder),
      }))
      .filter(category => category.skills.length > 0);

    // Map to DTOs
    return SkillMapper.toSkillCategoriesDto(categoriesWithSortedSkills);
  }
}

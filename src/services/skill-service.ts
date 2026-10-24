import { SkillCategoryRepository } from "@/repositories/skill-category-repository";
import { SkillMapper } from "@/mappers/skill-mapper";
import { SkillCategoryDto, SkillDto } from "@/types";

type SkillWithCategoryName = SkillCategoryDto & {
  skills: SkillDto[];
};

export class SkillService {
  static async getSkillsGroupedByCategory(): Promise<SkillWithCategoryName[]> {
    const categories = await SkillCategoryRepository.findAllWithSkills();

    const categoriesWithSkills = categories.filter(
      (c) => c.skills && c.skills.length > 0,
    );

    return categoriesWithSkills.map((category) =>
      SkillMapper.toSkillWithCategoryDto(category),
    );
  }
}
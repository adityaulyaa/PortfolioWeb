import { EmptyState } from "@/components/ui/EmptyState";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SkillService } from "@/services/skill-service";
import { SkillCategoryDto, SkillDto } from "@/types";

type SkillCategoryWithSkillsDto = SkillCategoryDto & {
  skills: SkillDto[];
};

function SkillsContent({ categories }: { categories: SkillCategoryWithSkillsDto[] }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="skills-heading">
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
      </Reveal>
      <Reveal>
        <div className="mt-8 space-y-8">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">
                {category.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill.id} label={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function SkillsEmptyState() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="skills-heading">
      <Reveal>
        <SectionHeading>Skills</SectionHeading>
      </Reveal>
      <Reveal>
        <EmptyState />
      </Reveal>
    </section>
  );
}

export async function Skills() {
  const categories = await SkillService.getSkillsGroupedByCategory().catch(() => null);
  return categories && categories.length > 0 ? (
    <SkillsContent categories={categories} />
  ) : (
    <SkillsEmptyState />
  );
}

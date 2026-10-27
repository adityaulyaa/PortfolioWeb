import { SkillService } from '@/services/skill.service';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { EmptyState } from '@/components/ui/EmptyState';
import { Tag } from '@/components/ui/Tag';
import { ErrorState } from '@/components/ui/ErrorState';

export async function Skills() {
  try {
    const categories = await SkillService.getSkillsGroupedByCategory();

    if (categories.length === 0) {
      return (
        <section id="skills" className="relative">
          <Reveal delay={0.1}>
            <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-5">
              <div className="rounded-t-3xl border border-[#1a2747]/60 bg-[#0a0f2a]/80 backdrop-blur-md shadow-[0_-8px_32px_rgba(10,15,42,0.5)] px-6 sm:px-8 py-8 sm:py-10 lg:py-12">
                <SectionHeading label="SKILLS" title="Skills" icon="skills" />
                <EmptyState title="No skills yet" message="Skills data is not available." />
              </div>
            </div>
          </Reveal>
        </section>
      );
    }

    return (
      <section id="skills" className="relative">
        <Reveal delay={0.1}>
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-5">
            <div className="rounded-t-3xl border border-[#1a2747]/60 bg-[#0a0f2a]/80 backdrop-blur-md shadow-[0_-8px_32px_rgba(10,15,42,0.5)] px-6 sm:px-8 py-8 sm:py-10 lg:py-12">
              <SectionHeading label="SKILLS" title="Skills" icon="skills" />
              
              <div className="space-y-8">
                {categories.map((category) => (
                  <div key={category.id}>
                    <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#eef2ff] mb-4">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {category.skills.map((skill) => (
                        <Tag key={skill.id} variant="default" size="md">
                          {skill.name}
                        </Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  } catch (error) {
    console.error('Error loading Skills:', error);
    return (
      <section id="skills" className="relative py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <ErrorState title="Failed to load skills section" message="Unable to load skills information." />
        </div>
      </section>
    );
  }
}

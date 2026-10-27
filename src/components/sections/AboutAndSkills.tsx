import { ProfileService } from '@/services/profile.service';
import { SkillService } from '@/services/skill.service';
import { ErrorState } from '@/components/ui/ErrorState';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { EmptyState } from '@/components/ui/EmptyState';
import { Tag } from '@/components/ui/Tag';

export async function AboutAndSkills() {
  try {
    const profile = await ProfileService.getProfile();
    const skills = await SkillService.getSkillsGroupedByCategory();

    return (
      <section id="about" className="relative -mt-20 sm:-mt-24 lg:-mt-0">
        <Reveal delay={0.1}>
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-5">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -right-[5%] top-0 h-[80%] w-[45%] rounded-[2rem] border border-[#2f72ff]/20 bg-gradient-to-br from-[#154fe9]/20 to-[#4120b8]/5 shadow-[0_0_30px_rgba(43,86,255,0.3)]" />
            <div className="pointer-events-none absolute left-[10%] top-[20%] h-24 w-32 rotate-[15deg] rounded-full bg-gradient-to-r from-[#2f72ff]/10 via-[#154fe9]/5 to-transparent blur-2xl" />

            <div className="relative rounded-t-3xl border border-[#1a2747]/60 bg-[#0a0f2a]/80 backdrop-blur-md shadow-[0_-8px_32px_rgba(10,15,42,0.5)] overflow-hidden">
              {/* Main content - Two columns on desktop */}
              <div className="px-6 sm:px-8 py-8 sm:py-10 lg:py-12 overflow-x-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
                  {/* Left Column: About Section with Info Items */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff] to-[#154fe9]">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold tracking-widest text-[#2f72ff] uppercase">About Me</span>
                    </div>
                    <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight mb-6">
                      <span className="text-[#f4f6ff]">About </span>
                      <span className="gradient-text">Me</span>
                    </h2>

                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#b7c7e8] whitespace-pre-line mb-6">
                      {profile.aboutText}
                    </p>

                    {/* Info Items - Below About Text */}
                    <div className="space-y-5 sm:space-y-6 mb-6">
                      {profile.location && (
                        <div className="flex items-start gap-4 min-w-0">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                            <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">Location</div>
                            <div className="text-[15px] font-medium text-[#eef2ff] break-words">{profile.location}</div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                          <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">University</div>
                          <div className="text-[15px] font-medium text-[#eef2ff] break-words">Universitas Diponegoro</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                          <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">Status</div>
                          <div className="text-[15px] font-medium text-[#eef2ff] break-words">Informatics Student</div>
                        </div>
                      </div>

                      {profile.email && (
                        <div className="flex items-start gap-4 min-w-0">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                            <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">Email</div>
                            <a href={`mailto:${profile.email}`} className="text-[15px] font-medium text-[#5b8fff] hover:text-[#7ba3ff] transition-colors break-all">
                              {profile.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <a 
                      href="/#contact" 
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#5b8fff] hover:text-[#7ba3ff] transition-colors group"
                    >
                      Read More 
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Right Column: Skills */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff] to-[#154fe9]">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-bold tracking-widest text-[#2f72ff] uppercase">Skills</span>
                    </div>
                    <h3 className="text-[28px] sm:text-[36px] font-bold leading-tight mb-6">
                      <span className="text-[#f4f6ff]">Skills</span>
                    </h3>

                    {skills.length === 0 ? (
                      <EmptyState title="No skills yet" message="Skills data is not available." />
                    ) : (
                      <div className="flex flex-wrap gap-2 sm:gap-3 overflow-hidden">
                        {skills.map((category) =>
                          category.skills.map((skill) => (
                            <Tag key={skill.id} variant="default" size="md">
                              {skill.name}
                            </Tag>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  } catch (error) {
    console.error('Error loading About and Skills:', error);
    return (
      <section id="about" className="relative py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <ErrorState title="Failed to load section" message="Unable to load about and skills information." />
        </div>
      </section>
    );
  }
}

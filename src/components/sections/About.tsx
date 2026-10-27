import { ProfileService } from '@/services/profile.service';
import { ErrorState } from '@/components/ui/ErrorState';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export async function About() {
  try {
    const profile = await ProfileService.getProfile();

    return (
      <section id="about" className="relative -mt-20 sm:-mt-24 lg:-mt-0">
        <Reveal delay={0.1}>
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-5">
            <div className="rounded-t-3xl border border-[#1a2747]/60 bg-[#0a0f2a]/80 backdrop-blur-md shadow-[0_-8px_32px_rgba(10,15,42,0.5)] px-6 sm:px-8 py-8 sm:py-10 lg:py-12">
              <SectionHeading label="ABOUT ME" title="About Me" icon="about" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left side: About text */}
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#b7c7e8] whitespace-pre-line">
                    {profile.aboutText}
                  </p>
                  <a 
                    href="/#contact" 
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#5b8fff] hover:text-[#7ba3ff] transition-colors group"
                  >
                    Read More 
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Right side: Info items */}
                <div className="space-y-5 sm:space-y-6">
                  {profile.location && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                        <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">Location</div>
                        <div className="text-[15px] font-medium text-[#eef2ff]">{profile.location}</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                      <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">University</div>
                      <div className="text-[15px] font-medium text-[#eef2ff]">Universitas Diponegoro</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                      <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">Status</div>
                      <div className="text-[15px] font-medium text-[#eef2ff]">Informatics Student</div>
                    </div>
                  </div>

                  {profile.email && (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2f72ff]/20 to-[#154fe9]/10 border border-[#2f72ff]/30">
                        <svg className="h-5 w-5 text-[#5b8fff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-[#7a8db3] mb-1">Email</div>
                        <a href={`mailto:${profile.email}`} className="text-[15px] font-medium text-[#5b8fff] hover:text-[#7ba3ff] transition-colors">
                          {profile.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  } catch (error) {
    console.error('Error loading About:', error);
    return (
      <section id="about" className="relative py-16">
        <div className="mx-auto max-w-[1200px] px-5">
          <ErrorState title="Failed to load about section" message="Unable to load about information." />
        </div>
      </section>
    );
  }
}

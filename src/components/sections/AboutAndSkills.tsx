import Link from 'next/link';
import { ProfileService } from '@/services/profile.service';
import { SkillService } from '@/services/skill.service';
import { Reveal } from '@/components/ui/Reveal';
import { EmptyState } from '@/components/ui/EmptyState';
import { Tag } from '@/components/ui/Tag';

export async function AboutAndSkills() {
  // Fetch data - errors will bubble up to Next.js error boundary
  const profile = await ProfileService.getProfile();
  const skills = await SkillService.getSkillsGroupedByCategory();

  return (
    <section id="about" className="relative -mt-20 sm:-mt-24 lg:-mt-21 overflow-visible">
      {/* Background Decorative Shapes - Hidden on mobile, visible on desktop */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {/* Skewed gradient shape - left top */}
        <div className="absolute -left-[15%] top-[5%] h-[70%] w-[50%] skew-x-[18deg] bg-gradient-to-br from-[#152b9c]/40 via-[#102b88]/15 to-transparent opacity-60" />
        
        {/* Rotated rectangle with border glow - right bottom */}
        <div className="absolute right-[5%] bottom-[15%] h-[40%] w-[30%] rotate-[-15deg] rounded-[2.5rem] border border-[#2f72ff]/40 bg-gradient-to-br from-[#154fe9]/50 to-[#4120b8]/15 shadow-[0_0_40px_rgba(43,86,255,0.4)]" />
        
        {/* Soft glow circle - left bottom */}
        <div className="absolute left-[8%] bottom-[5%] h-[50%] w-[35%] rounded-full bg-gradient-to-t from-[#2f72ff]/30 to-transparent blur-3xl" />
      </div>

      {/* Wave Pattern - Outside the card and extending beyond the rounded corner (n-shape) */}
      <div className="pointer-events-none absolute left-[-180px] top-[-350px] z-0 hidden h-[400px] w-[440px] -translate-x-px -translate-y-px lg:block">
        <svg viewBox="0 0 440 210" className="h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#154fe9" stopOpacity="0.82" />
              <stop offset="55%" stopColor="#2f72ff" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#2f72ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 210H440C350 202 300 182 242 164C170 142 94 158 0 210Z" fill="url(#aboutWaveGradient)" />
          <path d="M0 210C88 136 160 119 244 142C320 163 378 192 440 210" fill="none" stroke="#2f72ff" strokeOpacity="0.72" strokeWidth="2" />
          <path d="M0 200C84 129 155 107 246 132C322 153 378 185 440 202" fill="none" stroke="#154fe9" strokeOpacity="0.38" strokeWidth="1" />
        </svg>
      </div>

      <Reveal delay={0.1}>
        <div className="relative z-10 rounded-tl-[6rem] border border-[#2e58b8] bg-[#04081d] shadow-[0_-8px_32px_rgba(10,15,42,0.5),0_0_40px_rgba(47,114,255,0.15)] overflow-hidden w-full">
          {/* Top Accent Bar - Gradient line at top */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#2f72ff] to-transparent" />
          
          {/* Alignment wrapper - matches Hero section padding */}
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-5 py-8 sm:py-10 lg:py-12">
            {/* Floating Gradient Overlay - Inside Card, very subtle */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2f72ff]/5 via-transparent to-[#154fe9]/5 opacity-40" />
            
            {/* Background Decorations - Original subtle glow */}
            <div className="pointer-events-none absolute left-[10%] top-[20%] h-24 w-32 rotate-[15deg] rounded-full bg-gradient-to-r from-[#2f72ff]/10 via-[#154fe9]/5 to-transparent blur-2xl" />
            
            {/* Additional accent glow - right side */}
            <div className="pointer-events-none absolute right-[5%] bottom-[30%] h-28 w-40 rounded-full bg-gradient-to-l from-[#154fe9]/10 via-[#2f72ff]/5 to-transparent blur-2xl" />
            
            {/* Vertical Divider Line - Desktop only */}
            <div className="pointer-events-none absolute left-1/2 top-[60px] bottom-[40px] hidden lg:block w-px bg-gradient-to-b from-transparent via-[#2f72ff]/20 to-transparent" />
            
            {/* ========== FLOATING HEXAGON NETWORK ========== */}
            
            {/* Hexagon Cluster - Top Left */}
            <div className="pointer-events-none absolute top-8 left-12 hidden lg:block">
              <div className="relative w-32 h-32">
                {/* Main Hexagon - Largest with floating animation */}
                <svg className="absolute top-0 left-0 w-12 h-12 animate-[float_6s_ease-in-out_infinite]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient1)" 
                    strokeWidth="2"
                    className="animate-[spin_20s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2f72ff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8a43ed" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Second Hexagon - Medium with delayed float */}
                <svg className="absolute top-6 left-10 w-10 h-10 animate-[float_5s_ease-in-out_infinite_0.5s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient2)" 
                    strokeWidth="2"
                    className="animate-[spin_15s_linear_infinite_reverse]"
                  />
                  <defs>
                    <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#154fe9" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Third Hexagon - Small with fastest float */}
                <svg className="absolute top-12 left-4 w-8 h-8 animate-[float_4s_ease-in-out_infinite_1s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient3)" 
                    strokeWidth="2"
                    className="animate-[spin_18s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="hexGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#53b9ff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Connecting Dots with pulse */}
                <div className="absolute top-3 left-3 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#2f72ff] to-[#8a43ed] shadow-[0_0_10px_rgba(47,114,255,0.7)] animate-[pulse_2s_ease-in-out_infinite]" />
                <div className="absolute top-10 left-12 h-1 w-1 rounded-full bg-gradient-to-br from-[#154fe9] to-[#2f72ff] shadow-[0_0_8px_rgba(21,79,233,0.6)] animate-[pulse_2.5s_ease-in-out_infinite_0.3s]" />
                <div className="absolute top-14 left-6 h-1 w-1 rounded-full bg-gradient-to-br from-[#53b9ff] to-[#2f72ff] shadow-[0_0_6px_rgba(83,185,255,0.5)] animate-[pulse_3s_ease-in-out_infinite_0.6s]" />
              </div>
            </div>

            {/* Single Hexagon with Nodes - Bottom Right */}
            <div className="pointer-events-none absolute bottom-12 right-16 hidden lg:block">
              <div className="relative w-24 h-24 animate-[float_7s_ease-in-out_infinite_1.5s]">
                {/* Main Hexagon with rotation */}
                <svg className="absolute top-0 left-0 w-14 h-14 animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="url(#hexFill)" 
                    stroke="url(#hexGradient4)" 
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#154fe9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4120b8" stopOpacity="0.4" />
                    </linearGradient>
                    <radialGradient id="hexFill">
                      <stop offset="0%" stopColor="#2f72ff" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#154fe9" stopOpacity="0.05" />
                    </radialGradient>
                  </defs>
                </svg>
                
                {/* Connecting Lines with opacity animation */}
                <svg className="absolute -top-2 -left-2 w-28 h-28 opacity-30 animate-[pulse_4s_ease-in-out_infinite]">
                  <line x1="56" y1="28" x2="20" y2="10" stroke="#2f72ff" strokeWidth="1" strokeDasharray="2,3" />
                  <line x1="56" y1="28" x2="80" y2="80" stroke="#154fe9" strokeWidth="1" strokeDasharray="2,3" />
                </svg>
                
                {/* Outer Nodes with bounce */}
                <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#2f72ff] to-[#154fe9] shadow-[0_0_10px_rgba(47,114,255,0.7)] animate-[bounce_2s_ease-in-out_infinite]" />
                <div className="absolute bottom-2 right-0 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#154fe9] to-[#4120b8] shadow-[0_0_10px_rgba(21,79,233,0.7)] animate-[bounce_2.5s_ease-in-out_infinite_0.5s]" />
              </div>
            </div>

            {/* Small Hexagon Accent - Center Top with gentle pulse */}
            <div className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 hidden lg:block">
              <svg className="w-6 h-6 opacity-40 animate-[pulse_3s_ease-in-out_infinite] rotate-0 hover:rotate-180 transition-transform duration-1000" viewBox="0 0 100 100">
                <polygon 
                  points="50 1 95 25 95 75 50 99 5 75 5 25" 
                  fill="none" 
                  stroke="#53b9ff" 
                  strokeWidth="2"
                  className="animate-[spin_12s_linear_infinite]"
                />
              </svg>
            </div>

            {/* ADDITIONAL HEXAGON DECORATIONS - 4 NEW LOCATIONS */}
            
            {/* Hexagon Accent - Top Right (near Skills) */}
            <div className="pointer-events-none absolute top-16 right-20 hidden lg:block">
              <div className="relative w-20 h-20 animate-[float_5.5s_ease-in-out_infinite_0.7s]">
                <svg className="absolute top-0 left-0 w-10 h-10 animate-[spin_16s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient5)" 
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#53b9ff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-2 right-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#53b9ff] to-[#2f72ff] shadow-[0_0_10px_rgba(83,185,255,0.6)] animate-[bounce_2.2s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Hexagon Accent - Bottom Left (near Read More) */}
            <div className="pointer-events-none absolute bottom-20 left-6 hidden lg:block">
              <div className="relative w-16 h-16 animate-[float_4.8s_ease-in-out_infinite_0.3s]">
                <svg className="absolute top-0 left-0 w-8 h-8 animate-[spin_17s_linear_infinite]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="url(#hexFill2)" 
                    stroke="url(#hexGradient6)" 
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2f72ff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#154fe9" stopOpacity="0.3" />
                    </linearGradient>
                    <radialGradient id="hexFill2">
                      <stop offset="0%" stopColor="#8a43ed" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.04" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="absolute -bottom-1 left-1 h-1 w-1 rounded-full bg-gradient-to-br from-[#2f72ff] to-[#8a43ed] shadow-[0_0_8px_rgba(47,114,255,0.5)] animate-[pulse_2.8s_ease-in-out_infinite_0.4s]" />
              </div>
            </div>

            {/* Hexagon Cluster - Bottom Right Corner */}
            <div className="pointer-events-none absolute bottom-8 right-8 hidden lg:block">
              <div className="relative w-28 h-28">
                {/* Larger Hexagon */}
                <svg className="absolute bottom-0 right-0 w-12 h-12 animate-[float_6.2s_ease-in-out_infinite_1.2s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient7)" 
                    strokeWidth="2"
                    className="animate-[spin_19s_linear_infinite_reverse]"
                  />
                  <defs>
                    <linearGradient id="hexGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#154fe9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8a43ed" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Smaller Hexagon offset */}
                <svg className="absolute top-2 right-6 w-7 h-7 animate-[float_5.3s_ease-in-out_infinite_0.9s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient8)" 
                    strokeWidth="2"
                    className="animate-[spin_14s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="hexGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#53b9ff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Connecting dots */}
                <div className="absolute bottom-4 right-8 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#154fe9] to-[#8a43ed] shadow-[0_0_10px_rgba(21,79,233,0.6)] animate-[pulse_2.2s_ease-in-out_infinite_0.2s]" />
                <div className="absolute top-6 right-2 h-1 w-1 rounded-full bg-gradient-to-br from-[#53b9ff] to-[#2f72ff] shadow-[0_0_8px_rgba(83,185,255,0.5)] animate-[pulse_2.7s_ease-in-out_infinite_0.5s]" />
              </div>
            </div>

            {/* Floating Single Hexagon - Far Top Right */}
            <div className="pointer-events-none absolute top-12 right-6 hidden lg:block">
              <svg className="w-5 h-5 opacity-35 animate-[float_7.2s_ease-in-out_infinite_2s]" viewBox="0 0 100 100">
                <polygon 
                  points="50 1 95 25 95 75 50 99 5 75 5 25" 
                  fill="none" 
                  stroke="#2f72ff" 
                  strokeWidth="1.5"
                  className="animate-[spin_22s_linear_infinite_reverse]"
                />
              </svg>
            </div>
            
            {/* ========== END HEXAGON NETWORK ========== */}
            
            {/* Main content - Two columns on desktop */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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

                   <Link 
                     href="/#contact" 
                     className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#5b8fff] hover:text-[#7ba3ff] transition-colors group"
                   >
                     Read More 
                     <svg className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </Link>
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
                    <div className="space-y-6">
                      {skills.map((category) => (
                        <div key={category.id} className="space-y-3">
                          <h4 className="text-[12px] sm:text-[13px] font-semibold text-[#7a8db3] uppercase tracking-wider">
                            {category.name}
                          </h4>
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
                   )}
                </div>
              </div>
            </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

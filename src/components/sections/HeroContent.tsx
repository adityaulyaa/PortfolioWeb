import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { ProfileDto } from '@/types';

interface HeroContentProps {
  profile: ProfileDto;
}

const socialLinks = [
  { name: 'GitHub', url: (profile: ProfileDto) => profile.githubUrl, icon: 'github' },
  { name: 'LinkedIn', url: (profile: ProfileDto) => profile.linkedinUrl, icon: 'linkedin' },
  { name: 'Email', url: (profile: ProfileDto) => profile.email ? `mailto:${profile.email}` : null, icon: 'email' },
];

function SocialIcon({ type }: { type: string }) {
  if (type === 'github') {
    return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>;
  }
  if (type === 'linkedin') {
    return <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z" /></svg>;
  }
  return <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m3 7 9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" /></svg>;
}

function ContactIcon() {
  return <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="m4 12 16-8-4 16-4.5-5.5L4 12Zm7.5 2.5L16 20" /></svg>;
}

export function HeroContent({ profile }: HeroContentProps) {
  return (
    <section id="home" data-nav-section="home" className="hero-reference-background relative min-h-[calc(100vh-56px)] overflow-hidden pt-0">
      {/* Background Gradients - Hidden on mobile, visible on tablet+ */}
      <div className="pointer-events-none absolute -right-px -top-[10%] h-[92%] w-[59%] skew-x-[-18deg] bg-gradient-to-br from-[#152b9c]/70 via-[#102b88]/25 to-transparent opacity-80 hidden lg:block lg:-top-[15%]" />
      <div className="pointer-events-none absolute right-0 top-[4%] h-[56%] w-[25%] rotate-[25deg] rounded-[3rem] border border-[#2f72ff]/50 bg-gradient-to-br from-[#154fe9]/70 to-[#4120b8]/20 shadow-[0_0_45px_rgba(43,86,255,0.8)] hidden sm:block lg:top-[0%]" />
      <div className="pointer-events-none absolute bottom-0 left-[37%] h-32 w-[45%] skew-x-[-32deg] bg-gradient-to-t from-[#081f75]/70 to-transparent opacity-50 sm:opacity-100" />

      {/* Mobile Layout: Single column with photo as background */}
      <div className="relative lg:hidden min-h-[calc(100vh-56px)] pt-8 sm:pt-12">
        {/* Photo as absolute background with overlay */}
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[400px]">
            <Image
              src={profile.photoUrl}
              alt={profile.fullName}
              fill
              priority
              quality={95}
              className="object-cover object-top mix-blend-screen brightness-[0.6] contrast-[1.08] saturate-[0.78]"
            />
            {/* Gradient overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04081d] via-[#04081d]/50 to-transparent" />
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6">
          <Reveal delay={0.1} once={false} amount={0.3}>
            <div className="relative z-20 max-w-[520px]">
              <div className="mb-4 inline-flex rounded-full border border-[#2b67db] bg-[#071544]/60 px-3 py-0.5 text-xs sm:text-sm font-semibold text-[#dbe8ff] shadow-[0_0_14px_rgba(37,103,255,0.18)]">Hi, I&apos;m</div>
              <h1 className="text-[clamp(2rem,5.2vw,4.55rem)] font-bold leading-[1.02] tracking-[-0.055em]">
                <span className="text-[#f4f6ff]">Aditya </span><span className="gradient-text">Ulya</span>
              </h1>
              <p className="mt-4 sm:mt-5 text-[clamp(0.95rem,1.6vw,1.3rem)] font-semibold text-[#eef2ff]">{profile.headline}</p>
              <p className="mt-2.5 sm:mt-3 max-w-[420px] whitespace-pre-line text-[14px] sm:text-[15px] leading-[1.6] sm:leading-[1.55] text-[#b7c7e8]">{profile.shortIntro}</p>
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full sm:w-auto">
                <a href="https://wa.me/qr/6QLMK6SY557OB1?s=r" target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto justify-center sm:justify-start min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#8a43ed] to-[#2689f6] px-5 sm:px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(57,88,255,0.28)] transition-transform hover:-translate-y-0.5"><ContactIcon />Get In Touch</a>
                <button type="button" disabled title="Projects section coming soon" className="inline-flex w-full sm:w-auto justify-center sm:justify-start min-h-12 cursor-not-allowed items-center gap-2 rounded-xl border border-[#2e58b8] px-5 sm:px-6 text-sm font-bold text-[#d8e2ff] opacity-80"><span className="text-base">◉</span>View My Projects</button>
              </div>
              <div className="mt-5 sm:mt-6 flex gap-2 sm:gap-4">
                {socialLinks.map((link) => {
                  const url = link.url(profile);
                  return url ? <a key={link.name} href={url} target={link.name !== 'Email' ? '_blank' : undefined} rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined} aria-label={link.name} className="grid h-8 sm:h-9 w-8 sm:w-9 place-items-center text-[#eef4ff] transition-transform hover:scale-110"><SocialIcon type={link.icon} /></a> : null;
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Desktop Layout: Two-column grid (unchanged) */}
      <div className="hidden lg:grid relative z-10 mx-auto min-h-[calc(100vh-56px)] max-w-[1200px] grid-cols-[43%_57%] items-center gap-0 px-5 pb-0 -mt-16">
        <Reveal delay={0.1} once={false} amount={0.3}>
          <div className="relative z-20 max-w-[520px] -mt-3">
            <div className="mb-4 inline-flex rounded-full border border-[#2b67db] bg-[#071544]/60 px-3 py-0.5 text-xs sm:text-sm font-semibold text-[#dbe8ff] shadow-[0_0_14px_rgba(37,103,255,0.18)]">Hi, I&apos;m</div>
            <h1 className="text-[clamp(2rem,5.2vw,4.55rem)] font-bold leading-[1.02] tracking-[-0.055em]">
              <span className="text-[#f4f6ff]">Aditya </span><span className="gradient-text">Ulya</span>
            </h1>
            <p className="mt-6 text-[clamp(0.95rem,1.6vw,1.3rem)] font-semibold text-[#eef2ff]">{profile.headline}</p>
            <p className="mt-4 max-w-[420px] whitespace-pre-line text-[15px] leading-[1.55] text-[#b7c7e8]">{profile.shortIntro}</p>
            <div className="mt-7 flex flex-row gap-4 w-auto">
              <a href="https://wa.me/qr/6QLMK6SY557OB1?s=r" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#8a43ed] to-[#2689f6] px-6 text-sm font-bold text-white shadow-[0_8px_22px_rgba(57,88,255,0.28)] transition-transform hover:-translate-y-0.5"><ContactIcon />Get In Touch</a>
              <button type="button" disabled title="Projects section coming soon" className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 rounded-xl border border-[#2e58b8] px-6 text-sm font-bold text-[#d8e2ff] opacity-80"><span className="text-base">◉</span>View My Projects</button>
            </div>
            <div className="mt-7 flex gap-4">
              {socialLinks.map((link) => {
                const url = link.url(profile);
                return url ? <a key={link.name} href={url} target={link.name !== 'Email' ? '_blank' : undefined} rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined} aria-label={link.name} className="grid h-9 w-9 place-items-center text-[#eef4ff] transition-transform hover:scale-110"><SocialIcon type={link.icon} /></a> : null;
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} once={false} amount={0.3}>
          <div className="relative flex min-h-[calc(100vh-56px)] items-end justify-end overflow-hidden">
            <div className="relative mb-0 w-full max-w-[650px]">
              {/* Handwriting decoration */}
              <div className="pointer-events-none absolute right-0 top-[5%] z-20 text-right text-[#a16dff] hero-handwriting text-[clamp(1.4rem,2.8vw,2.3rem)] leading-[0.92]" style={{ transform: 'rotate(-8deg)' }}>
                <div>Better</div><div className="text-[#9b83ff]">Code</div><div className="text-[#53b9ff]">Bigger</div><div className="text-[#53b9ff]">Impact</div><div className="mt-3 text-2xl text-[#54aaff]">↗</div>
              </div>
              {/* Decorative circle border */}
              <div className="pointer-events-none absolute bottom-[10%] left-[10%] h-[72%] w-[72%] rotate-[-12deg] rounded-[2rem] border border-[#4e55ff]/70 bg-gradient-to-br from-[#214de5]/70 via-[#082a9c]/55 to-[#3016a5]/30 shadow-[0_0_45px_rgba(40,82,255,0.8)]" />
              <div className="relative z-10 mx-auto w-[76%] overflow-hidden rounded-t-[7rem] bg-gradient-to-b from-[#111b49]/20 to-transparent">
                <Image
                  src={profile.photoUrl}
                  alt={profile.fullName}
                  width={620}
                  height={620}
                  priority
                  quality={95}
                  className="h-auto w-full object-cover object-top mix-blend-screen brightness-[0.92] contrast-[1.08] saturate-[0.78]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

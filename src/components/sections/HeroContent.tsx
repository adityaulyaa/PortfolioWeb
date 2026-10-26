import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { ProfileDto } from '@/types';

const socialIcons = {
  GitHub: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
};

interface HeroContentProps {
  profile: ProfileDto;
}

const socialLinks = [
  { name: 'GitHub', key: 'githubUrl', icon: 'GitHub' },
  { name: 'LinkedIn', key: 'linkedinUrl', icon: 'LinkedIn' },
  { name: 'Email', key: 'email', icon: 'Email' },
];

export function HeroContent({ profile }: HeroContentProps) {
  const getSocialUrl = (link: (typeof socialLinks)[0]) => {
    if (link.key === 'email') {
      return profile.email ? `mailto:${profile.email}` : null;
    }
    return profile[link.key as keyof ProfileDto] || null;
  };

  const nameFirst = profile.fullName.split(' ')[0];
  const nameLast = profile.fullName.split(' ')[1];

  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 overflow-hidden relative">
      {/* Decorative background elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-600/30 via-blue-600/20 to-transparent rounded-full blur-3xl opacity-60"></div>
        {/* Bottom left glow */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/20 via-violet-600/10 to-transparent rounded-full blur-3xl opacity-40"></div>
        {/* Middle accent */}
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-to-l from-blue-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <Reveal delay={0.1}>
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-600 bg-transparent">
                <span className="text-slate-300">👋</span>
                <span className="text-sm text-slate-300">Hi, I&apos;m</span>
              </div>

              {/* Name - Enhanced */}
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-slate-50">{nameFirst}</span>
                  <span className="block">
                    <span className="gradient-text text-6xl sm:text-7xl lg:text-8xl">{nameLast}</span>
                  </span>
                </h1>
              </div>

              {/* Headline */}
              <p className="text-lg sm:text-xl text-slate-300 font-medium">{profile.headline}</p>

              {/* Short intro */}
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg whitespace-pre-line">
                {profile.shortIntro}
              </p>

              {/* Social Links - Bottom Left */}
              <div className="flex items-center gap-6 pt-6">
                {socialLinks.map((link) => {
                  const url = getSocialUrl(link);
                  return url ? (
                    <a
                      key={link.name}
                      href={url}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="w-12 h-12 rounded-lg bg-slate-800/50 hover:bg-gradient-to-br hover:from-violet-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center text-slate-400 hover:text-white transform hover:scale-110 backdrop-blur-sm border border-slate-700/50 hover:border-violet-500/50"
                      aria-label={link.name}
                    >
                      {socialIcons[link.icon as keyof typeof socialIcons]}
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </Reveal>

          {/* Right side - Profile image with decorative elements */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              {/* Decorative text - top right */}
              <div className="absolute -top-8 right-0 text-sm sm:text-base text-blue-400/70 font-handwriting italic z-20 pointer-events-none" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>
                <div className="text-right space-y-1">
                  <div>Better</div>
                  <div>Code</div>
                  <div>Bigger</div>
                  <div>Impact</div>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-blue-600/30 to-blue-600/20 rounded-3xl blur-3xl -z-10 transform scale-110"></div>

              {/* Image container with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 backdrop-blur-xl shadow-2xl">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-blue-600/20 rounded-3xl pointer-events-none z-10"></div>

                <Image
                  src={profile.photoUrl}
                  alt={profile.fullName}
                  width={400}
                  height={400}
                  quality={95}
                  priority
                  className="w-full h-auto rounded-2xl object-cover relative z-0"
                />
              </div>

              {/* Accent line bottom right */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-blue-500/30 rounded-br-3xl pointer-events-none"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ProfileService } from "@/services/profile-service";
import { ErrorState } from "@/components/ui/ErrorState";
import { Reveal } from "@/components/ui/Reveal";
import { ProfileDto } from "@/types";

async function HeroContent({ profile }: { profile: ProfileDto }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-[1fr_auto]" aria-labelledby="hero-title">
      <Reveal>
        <p className="mb-4 font-medium text-blue-600">Hello, I&apos;m</p>
        <h1 id="hero-title" className="text-5xl font-bold tracking-tight text-slate-950 dark:text-white">{profile.fullName}</h1>
        <p className="mt-4 text-2xl text-slate-700 dark:text-slate-300">{profile.headline}</p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">{profile.shortIntro}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {profile.githubUrl && <a className="rounded-full bg-slate-900 px-5 py-3 text-white" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {profile.linkedinUrl && <a className="rounded-full bg-blue-600 px-5 py-3 text-white" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {profile.email && <a className="rounded-full border border-slate-300 px-5 py-3" href={`mailto:${profile.email}`}>Email</a>}
        </div>
      </Reveal>
      <Reveal><Image src={profile.photoUrl} alt={`${profile.fullName} profile photo`} width={280} height={280} priority className="rounded-full border-8 border-white shadow-xl dark:border-slate-800" /></Reveal>
    </section>
  );
}

async function HeroError() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <ErrorState />
    </section>
  );
}

export async function Hero() {
  const profile = await ProfileService.getProfile().catch(() => null);
  return profile ? <HeroContent profile={profile} /> : <HeroError />;
}

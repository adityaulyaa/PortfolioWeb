import Image from "next/image";
import { ProfileService } from "@/services/profile-service";
import { ErrorState } from "@/components/ui/ErrorState";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProfileDto } from "@/types";

async function AboutContent({ profile }: { profile: ProfileDto }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeading>About</SectionHeading>
      </Reveal>
      <Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr]">
          <Image
            src={profile.photoUrl}
            alt={`${profile.fullName} profile photo`}
            width={280}
            height={280}
            className="mx-auto rounded-full border-8 border-white shadow-xl dark:border-slate-800"
          />
          <div>
            <p className="whitespace-pre-line text-lg leading-8 text-slate-700 dark:text-slate-300">
              {profile.aboutText}
            </p>
            {profile.location && (
              <p className="mt-6 text-slate-600 dark:text-slate-400">
                <strong>Location:</strong> {profile.location}
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

async function AboutError() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <ErrorState />
    </section>
  );
}

export async function About() {
  const profile = await ProfileService.getProfile().catch(() => null);
  return profile ? <AboutContent profile={profile} /> : <AboutError />;
}
import type { ProfileDto } from "@/types";

export function Footer({ profile }: { profile: ProfileDto | null }) {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
        {profile?.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {profile?.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        {profile?.email && <a href={`mailto:${profile.email}`}>Email</a>}
        <span className="ml-auto">© {new Date().getFullYear()} {profile?.fullName ?? "Portfolio"}</span>
      </div>
    </footer>
  );
}

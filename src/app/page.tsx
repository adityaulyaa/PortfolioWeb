import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProfileService } from "@/services/profile-service";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const profile = await ProfileService.getProfile();
    return {
      title: `${profile.fullName} | ${profile.headline}`,
      description: profile.shortIntro,
    };
  } catch {
    return {
      title: "Portfolio",
      description: "Personal portfolio website",
    };
  }
}

export default function Home() {
  return <main><Hero /></main>;
}

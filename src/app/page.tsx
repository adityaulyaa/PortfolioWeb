import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
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
  return (
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

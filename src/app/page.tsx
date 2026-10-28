import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutAndSkills } from '@/components/sections/AboutAndSkills';
import { Projects } from '@/components/sections/Projects';
import { ProfileService } from '@/services/profile.service';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const profile = await ProfileService.getProfile();
    return {
      title: `${profile.fullName} - ${profile.headline}`,
      description: profile.shortIntro,
    };
  } catch {
    return {
      title: 'Portfolio',
      description: 'Personal Portfolio Website',
    };
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <AboutAndSkills />
        <Projects />
        
        {/* Placeholder for upcoming sections */}
        {/* UC-04: Experience Section */}
        {/* UC-05: Education Section */}
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
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
        
        {/* Placeholder for upcoming sections */}
        {/* UC-02: About Section */}
        {/* UC-03: Skills Section */}
        {/* UC-06: Projects Section */}
        {/* UC-04: Experience Section */}
        {/* UC-05: Education Section */}
      </main>
      <Footer />
    </>
  );
}

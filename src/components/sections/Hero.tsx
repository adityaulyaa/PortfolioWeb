import { ProfileService } from '@/services/profile.service';
import { ErrorState } from '@/components/ui/ErrorState';
import { HeroContent } from './HeroContent';

export async function Hero() {
  try {
    const profile = await ProfileService.getProfile();
    // eslint-disable-next-line react-hooks/error-boundaries
    return <HeroContent profile={profile} />;
  } catch (error) {
    console.error('Error loading Hero:', error);
    return <ErrorState title="Failed to load profile" message="Unable to load hero section." />;
  }
}

import { Profile } from "@prisma/client";
import { ProfileDto } from "@/types";

export class ProfileMapper {
  static toDto(profile: Profile): ProfileDto {
    return {
      fullName: profile.fullName,
      headline: profile.headline,
      shortIntro: profile.shortIntro,
      aboutText: profile.aboutText,
      location: profile.location,
      photoUrl: profile.photoUrl,
      email: profile.email,
      githubUrl: profile.githubUrl,
      linkedinUrl: profile.linkedinUrl,
    };
  }
}

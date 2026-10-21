export interface ProfileDto {
  fullName: string;
  headline: string;
  shortIntro: string;
  aboutText: string;
  location: string | null;
  photoUrl: string;
  email: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
}

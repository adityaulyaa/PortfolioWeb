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

export interface SkillCategoryDto {
  id: number;
  name: string;
  displayOrder: number;
}

export interface SkillDto {
  id: number;
  name: string;
  displayOrder: number;
  categoryName: string;
}

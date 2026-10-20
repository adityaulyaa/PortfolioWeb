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

export interface SkillDto {
  id: number;
  name: string;
}

export interface SkillCategoryDto {
  id: number;
  name: string;
  skills: SkillDto[];
}

export interface ExperienceDto {
  id: number;
  organization: string;
  role: string;
  type: string;
  location: string | null;
  startDate: string;
  endDate: string | null;
  highlights: string[];
}

export interface EducationDto {
  id: number;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
}

export interface ProjectImageDto {
  imageUrl: string;
  altText: string;
}

export interface ProjectListItemDto {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnailUrl: string;
  techStack: string[];
}

export interface ProjectDetailDto {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  year: number;
  techStack: string[];
  thumbnailUrl: string;
  demoUrl: string | null;
  repoUrl: string | null;
  images: ProjectImageDto[];
}

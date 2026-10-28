import { Project, ProjectImage } from '@prisma/client';
import { ProjectListItemDto, ProjectDetailDto, ProjectImageDto } from '@/types';

export class ProjectMapper {
  static toProjectListItemDto(project: Project): ProjectListItemDto {
    return {
      slug: project.slug,
      title: project.title,
      shortDescription: project.shortDescription,
      thumbnailUrl: project.thumbnailUrl,
      techStack: project.techStack,
    };
  }

  static toProjectDetailDto(
    project: Project,
    images: ProjectImage[]
  ): ProjectDetailDto {
    const sortedImages = images.sort((a, b) => a.displayOrder - b.displayOrder);

    return {
      slug: project.slug,
      title: project.title,
      shortDescription: project.shortDescription,
      description: project.description,
      role: project.role,
      year: project.year,
      techStack: project.techStack,
      thumbnailUrl: project.thumbnailUrl,
      demoUrl: project.demoUrl || null,
      repoUrl: project.repoUrl || null,
      images: sortedImages.map((image) => this.toProjectImageDto(image)),
    };
  }

  private static toProjectImageDto(image: ProjectImage): ProjectImageDto {
    return {
      imageUrl: image.imageUrl,
      altText: image.altText,
    };
  }
}

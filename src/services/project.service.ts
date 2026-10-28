import { ProjectRepository } from '@/repositories/project.repository';
import { ProjectMapper } from '@/mappers/project.mapper';
import { NotFoundError } from '@/lib/errors';
import { ProjectListItemDto, ProjectDetailDto } from '@/types';

export class ProjectService {
  static async getProjectList(): Promise<ProjectListItemDto[]> {
    const projects = await ProjectRepository.findAll();
    return projects.map((project) => ProjectMapper.toProjectListItemDto(project));
  }

  static async getProjectBySlug(slug: string): Promise<ProjectDetailDto> {
    const project = await ProjectRepository.findBySlug(slug);

    if (!project) {
      throw new NotFoundError('Project not found');
    }

    return ProjectMapper.toProjectDetailDto(project, project.images);
  }
}

import { ProjectService } from '@/services/project.service';
import { ErrorState } from '@/components/ui/ErrorState';
import { ProjectsContent } from './ProjectsContent';

export async function Projects() {
  try {
    const projects = await ProjectService.getProjectList();
    
    if (projects.length === 0) {
      return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-purple-400">📦 PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="text-slate-50">Featured </span>
              <span className="gradient-text">Projects</span>
            </h2>
            <ErrorState 
              title="No Projects Found" 
              message="There are no projects to display at the moment."
            />
          </div>
        </section>
      );
    }

    return <ProjectsContent projects={projects} />;
  } catch (error) {
    console.error('Error loading Projects:', error);
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ErrorState 
            title="Failed to load projects" 
            message="Unable to load projects section."
          />
        </div>
      </section>
    );
  }
}

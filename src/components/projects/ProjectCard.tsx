import Link from 'next/link';
import Image from 'next/image';
import { Tag } from '@/components/ui/Tag';
import { ProjectListItemDto } from '@/types';

interface ProjectCardProps {
  project: ProjectListItemDto;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group flex-shrink-0 w-full sm:w-96 bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        {/* Thumbnail */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-50 line-clamp-1 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300 transition-colors">
          {project.shortDescription}
        </p>

        {/* Tech Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

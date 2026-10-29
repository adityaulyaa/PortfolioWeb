'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tag } from '@/components/ui/Tag';
import { ProjectListItemDto } from '@/types';

interface ProjectCardProps {
  project: ProjectListItemDto;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const maxVisibleTags = 3;
  const hasMoreTags = project.techStack.length > maxVisibleTags;
  const visibleTags = isExpanded ? project.techStack : project.techStack.slice(0, maxVisibleTags);
  const remainingCount = project.techStack.length - maxVisibleTags;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isExpanded]);

  const handleMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(true);
  };

  return (
    <div ref={cardRef} className="flex-shrink-0 w-full sm:w-80 md:w-96">
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="group h-[440px] bg-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-500/50 flex flex-col">
          <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-700 bg-slate-800 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              quality={80}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-50 line-clamp-2 group-hover:text-purple-400 transition-colors flex-shrink-0 leading-tight">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400 line-clamp-2 group-hover:text-slate-300 transition-colors flex-shrink-0 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-4 flex-shrink-0">
            <div className="flex flex-wrap gap-2">
              {visibleTags.map((tech) => (
                <Tag key={tech} size="sm">{tech}</Tag>
              ))}
              {hasMoreTags && !isExpanded && (
                <button
                  onClick={handleMoreClick}
                  className="inline-flex items-center justify-center px-3 py-1 text-[12px] rounded-full border border-[#2b67db]/60 bg-[#071544]/40 text-[#7ba3ff] hover:bg-[#071544]/80 hover:border-[#2f72ff] hover:text-[#eef4ff] transition-all font-medium shadow-[0_0_10px_rgba(37,103,255,0.15)] hover:shadow-[0_0_16px_rgba(47,114,255,0.3)]"
                  aria-label={`Show ${remainingCount} more technologies`}
                >
                  +{remainingCount} more
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

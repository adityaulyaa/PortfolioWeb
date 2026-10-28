import { prisma } from '@/lib/prisma';

export class ProjectRepository {
  static async findAll() {
    return await prisma.project.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });
  }

  static async findBySlug(slug: string) {
    return await prisma.project.findUnique({
      where: { slug },
      include: {
        images: {
          orderBy: {
            displayOrder: 'asc',
          },
        },
      },
    });
  }
}

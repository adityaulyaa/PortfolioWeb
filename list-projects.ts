import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  const projects = await prisma.project.findMany();
  console.log('All projects:');
  projects.forEach(p => console.log('-', p.slug, ':', p.title, '| thumb:', p.thumbnailUrl));
  await prisma.$disconnect();
}

run().catch(console.error);
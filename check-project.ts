import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function run() {
  const p = await prisma.project.findUnique({ where: { slug: 'investment-optimizer' } });
  console.log('DB Record:', p);
  await prisma.$disconnect();
}

run().catch(console.error);
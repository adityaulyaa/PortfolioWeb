import { PrismaClient } from '@prisma/client';
import { profileSeedData } from './seed-data/profile';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  console.log('📝 Seeding Profile...');
  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: profileSeedData,
    create: profileSeedData,
  });
  console.log(`✅ Profile seeded: ${profile.fullName}`);

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

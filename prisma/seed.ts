import { PrismaClient } from '@prisma/client';
import { profileSeedData } from './seed-data/profile';
import { skillsSeedData } from './seed-data/skills';

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

  console.log('📝 Seeding Skills...');
  for (const categoryData of skillsSeedData) {
    const category = await prisma.skillCategory.upsert({
      where: { name: categoryData.categoryName },
      update: { displayOrder: categoryData.displayOrder },
      create: {
        name: categoryData.categoryName,
        displayOrder: categoryData.displayOrder,
      },
    });

    for (const skillData of categoryData.skills) {
      await prisma.skill.upsert({
        where: {
          categoryId_name: {
            categoryId: category.id,
            name: skillData.name,
          },
        },
        update: { displayOrder: skillData.displayOrder },
        create: {
          name: skillData.name,
          categoryId: category.id,
          displayOrder: skillData.displayOrder,
        },
      });
    }

    console.log(`✅ Skills seeded for category: ${categoryData.categoryName}`);
  }

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

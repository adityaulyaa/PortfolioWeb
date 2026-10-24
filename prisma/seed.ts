import { PrismaClient } from "@prisma/client";
import { profileSeedData } from "./seed-data/profile";
import { skillsSeedData } from "./seed-data/skills";

const prisma = new PrismaClient();

function assertRequired(value: string, fieldName: string) {
  if (!value.trim()) {
    throw new Error(`${fieldName} must not be empty`);
  }
}

function assertHttpsUrl(value: string | null, fieldName: string) {
  if (!value) {
    return;
  }

  const url = new URL(value);

  if (url.protocol !== "https:") {
    throw new Error(`${fieldName} must use HTTPS`);
  }
}

async function main() {
  // Seed Profile
  assertRequired(profileSeedData.fullName, "fullName");
  assertRequired(profileSeedData.headline, "headline");
  assertRequired(profileSeedData.shortIntro, "shortIntro");
  assertHttpsUrl(profileSeedData.githubUrl, "githubUrl");
  assertHttpsUrl(profileSeedData.linkedinUrl, "linkedinUrl");

  await prisma.profile.upsert({
    where: { id: profileSeedData.id },
    update: profileSeedData,
    create: profileSeedData,
  });

  // Seed Skills
  for (const categoryData of skillsSeedData) {
    assertRequired(categoryData.name, "category name");

    const category = await prisma.skillCategory.upsert({
      where: { name: categoryData.name },
      update: { displayOrder: categoryData.displayOrder },
      create: {
        name: categoryData.name,
        displayOrder: categoryData.displayOrder,
      },
    });

    for (const skillData of categoryData.skills) {
      assertRequired(skillData.name, "skill name");

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
  }
}

main()
  .catch((error: unknown) => {
    console.error("Seed failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

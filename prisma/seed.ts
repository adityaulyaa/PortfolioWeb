import { PrismaClient } from "@prisma/client";
import { profileSeedData } from "./seed-data/profile";

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
}

main()
  .catch((error: unknown) => {
    console.error("Profile seed failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

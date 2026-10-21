import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function verifyProfile() {
  const count = await prisma.profile.count();
  const profiles = await prisma.profile.findMany({
    select: { id: true, fullName: true, headline: true, email: true },
  });

  console.log(`Total profiles: ${count}`);
  console.log(JSON.stringify(profiles, null, 2));
}

verifyProfile()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

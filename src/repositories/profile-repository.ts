import { prisma } from "@/lib/prisma";

export class ProfileRepository {
  static async findProfile() {
    return prisma.profile.findUnique({
      where: { id: 1 },
    });
  }
}

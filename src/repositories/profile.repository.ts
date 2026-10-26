import { prisma } from '@/lib/prisma';

export class ProfileRepository {
  static async findProfile() {
    return await prisma.profile.findUnique({
      where: { id: 1 },
    });
  }
}

import { ProfileRepository } from '@/repositories/profile.repository';
import { ProfileMapper } from '@/mappers/profile.mapper';
import { NotFoundError } from '@/lib/errors';
import { ProfileDto } from '@/types';

export class ProfileService {
  static async getProfile(): Promise<ProfileDto> {
    const profile = await ProfileRepository.findProfile();

    if (!profile) {
      throw new NotFoundError('Profile not found');
    }

    return ProfileMapper.toProfileDto(profile);
  }
}

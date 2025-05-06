import { Injectable } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { In, Repository } from 'typeorm';
import { Membership } from './entities/membership.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MembershipsService {
  constructor(
    @InjectRepository(Membership)
    private membershipRepository: Repository<Membership>,
  ) {}

  create(createMembershipDto: CreateMembershipDto) {
    const newMembership = this.membershipRepository.create(createMembershipDto);
    return this.membershipRepository.save(newMembership);
  }

  findAll() {
    return `This action returns all memberships`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membership`;
  }

  update(id: number, updateMembershipDto: UpdateMembershipDto) {
    return `This action updates a #${id} membership`;
  }

  remove(id: number) {
    return `This action removes a #${id} membership`;
  }
}

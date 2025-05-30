import { Injectable } from '@nestjs/common';
import { CreateMembershipDto } from '../memberships/dto/create-membership.dto';
import { Repository } from 'typeorm';
import { Membership } from '../memberships/entities/membership.entity';
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
    return this.membershipRepository.find();
  }

  deleteMany() {
    return this.membershipRepository.delete({});
  }
}

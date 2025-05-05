import { Injectable } from '@nestjs/common';
import { CreateAdditionalProgrammeDto } from './dto/create-additional_programme.dto';
import { UpdateAdditionalProgrammeDto } from './dto/update-additional_programme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdditionalProgramme } from './entities/additional_programme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdditionalProgrammesService {
  constructor(
    @InjectRepository(AdditionalProgramme)
    private additionalProgrammesRepository: Repository<AdditionalProgramme>,
  ) {}
  create(createAdditionalProgrammeDto: CreateAdditionalProgrammeDto) {
    const newAdditionalProgramme = this.additionalProgrammesRepository.create(
      createAdditionalProgrammeDto,
    );
    return this.additionalProgrammesRepository.save(newAdditionalProgramme);
  }

  findAll() {
    return `This action returns all additionalProgrammes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalProgramme`;
  }

  update(
    id: number,
    updateAdditionalProgrammeDto: UpdateAdditionalProgrammeDto,
  ) {
    return `This action updates a #${id} additionalProgramme`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalProgramme`;
  }
}

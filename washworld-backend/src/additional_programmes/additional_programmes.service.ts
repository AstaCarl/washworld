import { Injectable } from '@nestjs/common';
import { CreateAdditionalProgrammeDto } from './dto/create-additional_programme.dto';
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
    return this.additionalProgrammesRepository.find();
  }
}

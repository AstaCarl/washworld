import { Injectable } from '@nestjs/common';
import { CreateProgrammeDto } from '../programmes/dto/create-programme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programme } from '../programmes/entities/programme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammesService {
  constructor(
    @InjectRepository(Programme) // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
    private programmesRepository: Repository<Programme>,
  ) {}
  create(createProgrammeDto: CreateProgrammeDto) {
    const newProgramme = this.programmesRepository.create(createProgrammeDto);
    return this.programmesRepository.save(newProgramme);
  }

  findAll() {
    return this.programmesRepository.find();
  }
}

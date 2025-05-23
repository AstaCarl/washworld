import { Injectable } from '@nestjs/common';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programme } from './entities/programme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammesService {
  constructor(
    @InjectRepository(Programme)
    private programmesRepository: Repository<Programme>,
  ) {}
  create(createProgrammeDto: CreateProgrammeDto) {
    const newProgramme = this.programmesRepository.create(createProgrammeDto);
    return this.programmesRepository.save(newProgramme);
  }

  findAll() {
    return this.programmesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} programme`;
  }

  update(id: number, updateProgrammeDto: UpdateProgrammeDto) {
    return `This action updates a #${id} programme`;
  }

  remove(id: number) {
    return `This action removes a #${id} programme`;
  }
}

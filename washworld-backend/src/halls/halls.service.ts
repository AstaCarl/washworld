import { Injectable } from '@nestjs/common';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hall } from './entities/hall.entity';

@Injectable()
export class HallsService {
  constructor(
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
  ) {}
  create(createHallDto: CreateHallDto) {
    return this.hallRepository.save(createHallDto);
  }

  findAll() {
    return `This action returns all halls`;
  }

  findOne(id: number) {
    return this.hallRepository.findOne({ where: { id } });
  }

  update(id: number, updateHallDto: UpdateHallDto) {
    return this.hallRepository.update(id, updateHallDto);
  }

  remove(id: number) {
    return `This action removes a #${id} hall`;
  }
}

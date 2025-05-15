import { Injectable } from '@nestjs/common';
import { CreateWashDto } from './dto/create-wash.dto';
import { UpdateWashDto } from './dto/update-wash.dto';
import { Wash } from './entities/wash.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hall } from 'src/halls/entities/hall.entity';

@Injectable()
export class WashesService {
  constructor(
    @InjectRepository(Wash)
    private washRepository: Repository<Wash>,
    @InjectRepository(Hall)
    private hallRepository: Repository<Hall>,
  ) {}

  async create(createWashDto: CreateWashDto) {
    return this.washRepository.save(createWashDto);
  }

  findAll() {
    return `This action returns all washes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wash`;
  }

  update(id: number, updateWashDto: UpdateWashDto) {
    return `This action updates a #${id} wash`;
  }

  remove(id: number) {
    return `This action removes a #${id} wash`;
  }
}

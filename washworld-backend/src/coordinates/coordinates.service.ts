import { Injectable } from '@nestjs/common';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { UpdateCoordinateDto } from './dto/update-coordinate.dto';
import { Coordinate } from './entities/coordinate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoordinatesService {
  constructor(
    @InjectRepository(Coordinate)
    private coordinateRepository: Repository<Coordinate>,
  ) {}

  create(createCoordinateDto: CreateCoordinateDto) {
    return this.coordinateRepository.save(createCoordinateDto);
  }

  findAll() {
    return this.coordinateRepository.find({ relations: ['location'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} coordinate`;
  }

  update(id: number, updateCoordinateDto: UpdateCoordinateDto) {
    return `This action updates a #${id} coordinate`;
  }

  remove(id: number) {
    return `This action removes a #${id} coordinate`;
  }
}

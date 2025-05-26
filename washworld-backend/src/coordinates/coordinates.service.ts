import { Injectable } from '@nestjs/common';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
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

}

import { Injectable } from '@nestjs/common';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { Coordinate } from './entities/coordinate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoordinatesService {
  constructor(
    @InjectRepository(Coordinate)  // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
    private coordinateRepository: Repository<Coordinate>,
  ) {}

  create(createCoordinateDto: CreateCoordinateDto) {
    const newCoordinate = this.coordinateRepository.create(createCoordinateDto);
    return this.coordinateRepository.save(newCoordinate);
  }

}

import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { Coordinate } from 'src/coordinates/entities/coordinate.entity';
import { CoordinatesService } from 'src/coordinates/coordinates.service';

@Injectable()
export class LocationsService {
        constructor(
          @InjectRepository(Location)
          private locationRepository: Repository<Location>,
          @InjectRepository(Coordinate)
          private coordinateRepository: Repository<Coordinate>,
          
        ) {}

  async create(createLocationDto: CreateLocationDto) {
    const { coordinates, ...locationData } = createLocationDto;

    const newCoordinate = this.coordinateRepository.create(coordinates);
    await this.coordinateRepository.save(newCoordinate);

    const location = this.locationRepository.create({
      ...locationData,
      coordinate: newCoordinate,
    });

    return this.locationRepository.save(location);
  }

  findAll() {
    return `This action returns all locations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}

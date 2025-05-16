import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { Coordinate } from 'src/coordinates/entities/coordinate.entity';
import { CoordinatesService } from 'src/coordinates/coordinates.service';
import { Hall } from 'src/halls/entities/hall.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Coordinate)
    private coordinateRepository: Repository<Coordinate>,
    @InjectRepository(Hall)
    private hallRepository: Repository<Hall>,
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
    return this.locationRepository.find({relations: ['coordinate']});
  }

  async findOne(id: number) {
    const location = await this.locationRepository.findOne({
      where: { id },
      relations: ['coordinate'],
    });

    const halls = await this.hallRepository.find({
      where: { location: { id } },
      relations: ['washes', 'washes.programme', 'washes.additionalProgramme'],
    });

    return { location, halls };
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}

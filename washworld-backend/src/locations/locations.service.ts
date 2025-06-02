import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { Coordinate } from '../../src/coordinates/entities/coordinate.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location) // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
    private locationRepository: Repository<Location>,
    @InjectRepository(Coordinate) // injecting the Coordinate repository to allow interaction with the coordinates table
    private coordinateRepository: Repository<Coordinate>,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    const { coordinates, ...locationData } = createLocationDto; // extracting coordinates from the DTO
    const newCoordinate = this.coordinateRepository.create(coordinates);
    await this.coordinateRepository.save(newCoordinate);

    const location = this.locationRepository.create({
      ...locationData,
      coordinate: newCoordinate,
    });

    return this.locationRepository.save(location);
  }

  async findAll() {
    const locations = await this.locationRepository.find({
      relations: [
        'coordinate',
        'openingHours',
        'halls.washes.programme',
        'halls.washes.additionalProgramme',
      ],
    });

    // mapping each location to include its halls and washes with calculated fields
    const locationData = locations.map((location) => ({
      ...location,
      halls: Array.isArray(location.halls)
        ? location.halls.map((hall) => ({
            ...hall,
            washes: Array.isArray(hall.washes)
              ? hall.washes.map((wash) => {
                  // calculating total run time in seconds and finished time for each wash
                  const totalRunTimeInSeconds =
                    (wash.programme?.runTimeInSeconds || 0) +
                    (wash.additionalProgramme?.runTimeInSeconds || 0);

                  const finishedTime = wash.startedTimeDate
                    ? new Date(
                        new Date(wash.startedTimeDate).getTime() +
                          totalRunTimeInSeconds * 1000,
                      )
                    : null;

                  // returning the wash object with additional calculated fields
                  return {
                    ...wash,
                    totalRunTimeInSeconds,
                    finishedTime,
                  };
                })
              : [],
          }))
        : [],
    }));

    return locationData;
  }
}

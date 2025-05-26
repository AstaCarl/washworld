import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { Coordinate } from 'src/coordinates/entities/coordinate.entity';

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

  async findAll() {
    const locations = await this.locationRepository.find({
      relations: [
        'coordinate',
        'openingHours',
        'halls.washes.programme',
        'halls.washes.additionalProgramme',
      ],
    });

    const locationData = locations.map((location) => ({
      ...location,
      halls: Array.isArray(location.halls)
        ? location.halls.map((hall) => ({
            ...hall,
            washes: Array.isArray(hall.washes)
              ? hall.washes.map((wash) => {
                  const totalRunTimeInSeconds =
                    (wash.programme?.runTimeInSeconds || 0) +
                    (wash.additionalProgramme?.runTimeInSeconds || 0);

                  const finishedTime = wash.startedTimeDate
                    ? new Date(
                        new Date(wash.startedTimeDate).getTime() +
                          totalRunTimeInSeconds * 1000,
                      )
                    : null;

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

  // async findOne(id: number) {
  //   const location = await this.locationRepository.findOne({
  //     where: { id },
  //     relations: ['coordinate', 'openingHours'],
  //   });

  //   const halls = await this.hallRepository.find({
  //     where: { location: { id } },
  //     relations: ['washes', 'washes.programme', 'washes.additionalProgramme'],
  //   });

  //   return { location, halls };
  // }
}

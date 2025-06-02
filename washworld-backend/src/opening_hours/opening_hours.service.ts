import { Injectable } from '@nestjs/common';
import { CreateOpeningHourDto } from './dto/create-opening_hour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OpeningHour } from './entities/opening_hour.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpeningHoursService {
    constructor(
      @InjectRepository(OpeningHour) // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
      private openingHourRepository: Repository<OpeningHour>,
    ) {}
  create(createOpeningHourDto: CreateOpeningHourDto) {
    const newOpeningHour = this.openingHourRepository.create(createOpeningHourDto); 
    return this.openingHourRepository.save(newOpeningHour);
  }
}

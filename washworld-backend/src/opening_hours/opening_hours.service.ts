import { Injectable } from '@nestjs/common';
import { CreateOpeningHourDto } from './dto/create-opening_hour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OpeningHour } from './entities/opening_hour.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpeningHoursService {
    constructor(
      @InjectRepository(OpeningHour)
      private openingHourRepository: Repository<OpeningHour>,
    ) {}
  create(createOpeningHourDto: CreateOpeningHourDto) {
    return this.openingHourRepository.save(createOpeningHourDto);
  }
}

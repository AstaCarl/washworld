import { Injectable } from '@nestjs/common';
import { CreateOpeningHourDto } from './dto/create-opening_hour.dto';
import { UpdateOpeningHourDto } from './dto/update-opening_hour.dto';
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

  findAll() {
    return this.openingHourRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} openingHour`;
  }

  update(id: number, updateOpeningHourDto: UpdateOpeningHourDto) {
    return `This action updates a #${id} openingHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} openingHour`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateWashDto } from './dto/create-wash.dto';
import { Wash } from '../washes/entities/wash.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WashesService {
  constructor(
    @InjectRepository(Wash) // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
    private washRepository: Repository<Wash>,
  ) {}

  async create(userId: number, createWashDto: CreateWashDto) {
    const wash = this.washRepository.save({
      ...createWashDto,
      user: { id: userId },
    });
    return wash;
  }

  async findOne(id: number) {
    const wash = await this.washRepository.findOne({
      where: { id },
      relations: ['programme', 'additionalProgramme'],
    });

    // calculate total run time for programme and additional programme
    const totalRunTimeInSeconds =
      (wash?.programme?.runTimeInSeconds || 0) +
      (wash?.additionalProgramme?.runTimeInSeconds || 0);

    // calculate finished time based on started time and total run time
    const finishedTime = wash?.startedTimeDate
      ? new Date(
          new Date(wash.startedTimeDate).getTime() +
            totalRunTimeInSeconds * 1000,
        )
      : null;

    // Create a new object with the calculated fields to return
    const washData = {
      ...wash,
      totalRunTimeInSeconds,
      finishedTime,
    };

    return washData;
  }
}

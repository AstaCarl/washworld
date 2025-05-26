import { Injectable } from '@nestjs/common';
import { CreateWashDto } from './dto/create-wash.dto';
import { Wash } from './entities/wash.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WashesService {
  constructor(
    @InjectRepository(Wash)
    private washRepository: Repository<Wash>,
  ) {}

  async create(req: any, createWashDto: CreateWashDto) {
    console.log('Received DTO:', createWashDto);
    const user = req.user;
    console.log('User from request:', user);

    const wash = this.washRepository.save({
      ...createWashDto,
      user: { id: user.id },
    });
    return wash;
  }


  async findOne(id: number) {
    const wash = await this.washRepository.findOne({
      where: { id },
      relations: ['programme', 'additionalProgramme'],
    });

    const totalRunTimeInSeconds =
      (wash?.programme?.runTimeInSeconds || 0) +
      (wash?.additionalProgramme?.runTimeInSeconds || 0);

    const finishedTime = wash?.startedTimeDate
      ? new Date(
          new Date(wash.startedTimeDate).getTime() +
            totalRunTimeInSeconds * 1000,
        )
      : null;

    const washData = {
      ...wash,
      totalRunTimeInSeconds,
      finishedTime,
    };

    return washData;
  }

}

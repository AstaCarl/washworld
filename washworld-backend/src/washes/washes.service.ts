import { Body, Injectable, Req, UseGuards } from '@nestjs/common';
import { CreateWashDto } from './dto/create-wash.dto';
import { UpdateWashDto } from './dto/update-wash.dto';
import { Wash } from './entities/wash.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hall } from 'src/halls/entities/hall.entity';
import { retry } from 'rxjs';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Injectable()
export class WashesService {
  constructor(
    @InjectRepository(Wash)
    private washRepository: Repository<Wash>,
    @InjectRepository(Hall)
    private hallRepository: Repository<Hall>,
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

  findAll() {
    return `This action returns all washes`;
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

  update(id: number, updateWashDto: UpdateWashDto) {
    return `This action updates a #${id} wash`;
  }

  remove(id: number) {
    return `This action removes a #${id} wash`;
  }
}

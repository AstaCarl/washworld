import { Injectable } from '@nestjs/common';
import { CreateHallDto } from './dto/create-hall.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hall } from './entities/hall.entity';

@Injectable()
export class HallsService {
  constructor(
    @InjectRepository(Hall)  // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
    private readonly hallRepository: Repository<Hall>,
  ) {}
  create(createHallDto: CreateHallDto) {
    const newHall = this.hallRepository.create(createHallDto); 
    return this.hallRepository.save(newHall);
  }


  // method for testing purposes only
  deleteMany() {
    return this.hallRepository.delete({});
  }
}

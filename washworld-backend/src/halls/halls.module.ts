import { Module } from '@nestjs/common';
import { HallsService } from './halls.service';
import { HallsController } from './halls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hall } from './entities/hall.entity';
import { Wash } from 'src/washes/entities/wash.entity';
import { Location } from 'src/locations/entities/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hall, Wash, Location])],
  controllers: [HallsController],
  providers: [HallsService],
})
export class HallsModule {}

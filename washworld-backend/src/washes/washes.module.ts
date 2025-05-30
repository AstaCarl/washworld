import { Module } from '@nestjs/common';
import { WashesService } from './washes.service';
import { WashesController } from './washes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hall } from '../../src/halls/entities/hall.entity';
import { User } from '../../src/users/entities/user.entity';
import { Programme } from '../../src/programmes/entities/programme.entity';
import { AdditionalProgramme } from '../../src/additional_programmes/entities/additional_programme.entity';
import { Wash } from '../washes/entities/wash.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Hall, User, Programme, AdditionalProgramme, Wash])],
  controllers: [WashesController],
  providers: [WashesService],
})
export class WashesModule {}

import { Module } from '@nestjs/common';
import { AdditionalProgrammesService } from './additional_programmes.service';
import { AdditionalProgrammesController } from './additional_programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditionalProgramme } from './entities/additional_programme.entity';
import { User } from '../../src/users/entities/user.entity';
import { UsersService } from '../../src/users/users.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdditionalProgramme, User])],
  controllers: [AdditionalProgrammesController],
  providers: [AdditionalProgrammesService, UsersService],
})
export class AdditionalProgrammesModule {}

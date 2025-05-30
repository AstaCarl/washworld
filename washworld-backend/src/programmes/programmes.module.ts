import { Module } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { ProgrammesController } from './programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programme } from './entities/programme.entity';
import { User } from '../../src/users/entities/user.entity';
import { UsersService } from '../../src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Programme, User])],
  controllers: [ProgrammesController],
  providers: [ProgrammesService, UsersService],
})
export class ProgrammesModule {}

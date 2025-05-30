import { Module } from '@nestjs/common';
import { OpeningHoursService } from './opening_hours.service';
import { OpeningHoursController } from './opening_hours.controller';
import { OpeningHour } from './entities/opening_hour.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../../src/users/users.service';
import { User } from '../../src/users/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OpeningHour, User])], // Add your entities here
  controllers: [OpeningHoursController],
  providers: [OpeningHoursService, UsersService],
})
export class OpeningHoursModule {}

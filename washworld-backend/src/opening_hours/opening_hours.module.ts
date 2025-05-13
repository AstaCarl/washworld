import { Module } from '@nestjs/common';
import { OpeningHoursService } from './opening_hours.service';
import { OpeningHoursController } from './opening_hours.controller';
import { OpeningHour } from './entities/opening_hour.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([OpeningHour])], // Add your entities here
  controllers: [OpeningHoursController],
  providers: [OpeningHoursService],
})
export class OpeningHoursModule {}

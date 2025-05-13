import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoordinatesService } from 'src/coordinates/coordinates.service';
import { Location } from './entities/location.entity';
import { Coordinate } from 'src/coordinates/entities/coordinate.entity';
import { CoordinatesModule } from 'src/coordinates/coordinates.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location, Coordinate]),
  CoordinatesModule,
],
  controllers: [LocationsController],
  providers: [LocationsService, CoordinatesService],
})
export class LocationsModule {}

import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @Post()
  @ApiOperation({ summary: 'POST coordinate, is added through the locations' })
  @ApiResponse({ status: 201, description: 'Coordinate created successfully.' })
  create(@Body() createCoordinateDto: CreateCoordinateDto) {
    return this.coordinatesService.create(createCoordinateDto);
  }
}

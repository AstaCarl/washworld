import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { OpeningHoursService } from './opening_hours.service';
import { CreateOpeningHourDto } from './dto/create-opening_hour.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('opening-hours')
export class OpeningHoursController {
  constructor(private readonly openingHoursService: OpeningHoursService) {}

  @Post()
  @ApiOperation({ summary: 'POST opening hours' })
  @ApiResponse({ status: 201, description: 'Open hours created successfully.' })
  create(@Body() createOpeningHourDto: CreateOpeningHourDto) {
    return this.openingHoursService.create(createOpeningHourDto);
  }
}

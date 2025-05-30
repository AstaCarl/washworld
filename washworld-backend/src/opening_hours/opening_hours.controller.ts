import {
  Controller,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { OpeningHoursService } from './opening_hours.service';
import { CreateOpeningHourDto } from './dto/create-opening_hour.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../src/authentication/jwt-auth.guard';
import { AdminGuard } from '../../src/authentication/admin-user.guard';

@Controller('opening-hours')
export class OpeningHoursController {
  constructor(private readonly openingHoursService: OpeningHoursService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard) // Ensure to use the correct guard for authentication
  @ApiOperation({ summary: 'POST opening hours' })
  @ApiResponse({ status: 201, description: 'Open hours created successfully.' })
  create(@Body() createOpeningHourDto: CreateOpeningHourDto) {
    return this.openingHoursService.create(createOpeningHourDto);
  }
}

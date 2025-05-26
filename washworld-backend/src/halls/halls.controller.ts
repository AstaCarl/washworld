import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { HallsService } from './halls.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Post()
  @ApiOperation({ summary: 'POST a hall' })
  @ApiResponse({ status: 201, description: 'Hall created successfully.' })
  create(@Body() createHallDto: CreateHallDto) {
    return this.hallsService.create(createHallDto);
  }
}

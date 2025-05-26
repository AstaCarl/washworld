import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LocationResponseDto } from './dto/response-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @ApiOperation({ summary: 'POST a location' })
  @ApiResponse({ status: 201, description: 'Location created successfully.' })
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @Get()
  @ApiOperation({ summary: 'GET all locations' })
  @ApiResponse({
    status: 201,
    description: 'Locations retrieved successfully.',
    type: [LocationResponseDto],
  })
  findAll() {
    return this.locationsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.locationsService.findOne(+id);
  // }
}

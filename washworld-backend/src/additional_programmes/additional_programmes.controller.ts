import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { AdditionalProgrammesService } from './additional_programmes.service';
import { CreateAdditionalProgrammeDto } from './dto/create-additional_programme.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdditionalProgrammeResponseDto } from './dto/response-additional_programme.dto';

@Controller('additional-programmes')
export class AdditionalProgrammesController {
  constructor(
    private readonly additionalProgrammesService: AdditionalProgrammesService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'POST an additional programme' })
  @ApiResponse({
    status: 201,
    description: 'Additional programme created successfully.',
  })
  create(@Body() createAdditionalProgrammeDto: CreateAdditionalProgrammeDto) {
    return this.additionalProgrammesService.create(
      createAdditionalProgrammeDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'GET all additional programmes' })
  @ApiResponse({
    status: 201,
    description: 'Additional programmes retrieved successfully.', type: [AdditionalProgrammeResponseDto],
  })
  findAll() {
    return this.additionalProgrammesService.findAll();
  }
}

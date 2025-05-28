import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AdditionalProgrammesService } from './additional_programmes.service';
import { CreateAdditionalProgrammeDto } from './dto/create-additional_programme.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdditionalProgrammeResponseDto } from './dto/response-additional_programme.dto';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { AdminGuard } from 'src/authentication/admin-user.guard';

@Controller('additional-programmes')
export class AdditionalProgrammesController {
  constructor(
    private readonly additionalProgrammesService: AdditionalProgrammesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard) // Ensure to use the correct guard for authentication
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

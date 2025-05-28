import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProgrammesService } from './programmes.service';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProgrammeResponseDto } from './dto/response-programme.dto';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { AdminGuard } from 'src/authentication/admin-user.guard';

@Controller('programmes')
export class ProgrammesController {
  constructor(private readonly programmesService: ProgrammesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard) // Ensure to use the correct guard for authentication
  @ApiOperation({ summary: 'POST a programme' })
  @ApiResponse({ status: 201, description: 'Programme created successfully.' })
  create(@Body() createProgrammeDto: CreateProgrammeDto) {
    return this.programmesService.create(createProgrammeDto);
  }

  @Get()
  @ApiOperation({ summary: 'GET programmes' })
  @ApiResponse({
    status: 200,
    description: 'Programmes retrieved successfully.',
    type: [ProgrammeResponseDto],
  })
  findAll() {
    return this.programmesService.findAll();
  }
}

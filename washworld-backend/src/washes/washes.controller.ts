import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { WashesService } from './washes.service';
import { CreateWashDto } from './dto/create-wash.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { WashResponseDto } from './dto/response-wash.dto';

@Controller('washes')
export class WashesController {
  constructor(private readonly washesService: WashesService) {}

  // Endpoint to create a wash, protected by JWT authentication
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'POST a wash' })
  @ApiResponse({ status: 201, description: 'Wash created successfully.' })
  create(@Req() req, @Body() createWashDto: CreateWashDto) {
    return this.washesService.create(req, createWashDto);
  }


  // Endpoint to retrieve a specific wash by ID
  @Get(':id')
  @ApiOperation({ summary: 'GET wash' })
  @ApiResponse({
    status: 200,
    description: 'Wash retrieved successfully.',
    type: [WashResponseDto],
  })
  findOne(@Param('id') id: string) {
    return this.washesService.findOne(+id);
  }
}

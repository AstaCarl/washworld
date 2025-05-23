import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WashesService } from './washes.service';
import { CreateWashDto } from './dto/create-wash.dto';
import { UpdateWashDto } from './dto/update-wash.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('washes')
export class WashesController {
  constructor(private readonly washesService: WashesService) {}

  @Post()
  @ApiOperation({ summary: 'Start a wash' })
  @ApiResponse({ status: 201, description: 'Wash created successfully.' })
  create(@Body() createWashDto: CreateWashDto) {
    return this.washesService.create(createWashDto);
  }

  @Get()
  findAll() {
    return this.washesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.washesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWashDto: UpdateWashDto) {
    return this.washesService.update(+id, updateWashDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.washesService.remove(+id);
  }
}

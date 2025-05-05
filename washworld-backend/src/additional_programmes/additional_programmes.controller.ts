import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdditionalProgrammesService } from './additional_programmes.service';
import { CreateAdditionalProgrammeDto } from './dto/create-additional_programme.dto';
import { UpdateAdditionalProgrammeDto } from './dto/update-additional_programme.dto';

@Controller('additional-programmes')
export class AdditionalProgrammesController {
  constructor(private readonly additionalProgrammesService: AdditionalProgrammesService) {}

  @Post()
  create(@Body() createAdditionalProgrammeDto: CreateAdditionalProgrammeDto) {
    return this.additionalProgrammesService.create(createAdditionalProgrammeDto);
  }

  @Get()
  findAll() {
    return this.additionalProgrammesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalProgrammesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdditionalProgrammeDto: UpdateAdditionalProgrammeDto) {
    return this.additionalProgrammesService.update(+id, updateAdditionalProgrammeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionalProgrammesService.remove(+id);
  }
}

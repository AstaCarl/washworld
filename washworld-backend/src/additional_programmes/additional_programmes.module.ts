import { Module } from '@nestjs/common';
import { AdditionalProgrammesService } from './additional_programmes.service';
import { AdditionalProgrammesController } from './additional_programmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditionalProgramme } from './entities/additional_programme.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AdditionalProgramme])],
  controllers: [AdditionalProgrammesController],
  providers: [AdditionalProgrammesService],
})
export class AdditionalProgrammesModule {}

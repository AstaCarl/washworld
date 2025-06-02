import { ApiProperty } from '@nestjs/swagger';
import { Programme } from '../../programmes/entities/programme.entity';
import { AdditionalProgramme } from '../../../src/additional_programmes/entities/additional_programme.entity';

// This DTO is used to represent the response structure for a wash operation for the documentation on swagger
export class WashResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  startedTimeDate: Date;

  @ApiProperty({ type: () => Programme })
  programme: Programme;

  @ApiProperty({ type: () => AdditionalProgramme, nullable: true })
  additionalProgramme: AdditionalProgramme | null;

  @ApiProperty()
  totalRunTimeInSeconds: number;

  @ApiProperty({ type: String, nullable: true })
  finishedTime: Date | null;
}
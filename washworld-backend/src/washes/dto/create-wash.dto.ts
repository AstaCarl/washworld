import { ApiProperty } from '@nestjs/swagger';
import { AdditionalProgramme } from '../../../src/additional_programmes/entities/additional_programme.entity';
import { Hall } from '../../../src/halls/entities/hall.entity';
import { Programme } from '../../../src/programmes/entities/programme.entity';
import { User } from '../../../src/users/entities/user.entity';

// DTO for creating a wash
export class CreateWashDto {
  startedTimeDate: Date;
  @ApiProperty({ example: {"id": 1} }) //ApiProperty decorator for swagger documentation
  user: User;
  @ApiProperty({ example: {"id": 1} })
  hall: Hall;
  @ApiProperty({ example: {"id": 1} })
  programme: Programme;
  @ApiProperty({ example: {"id": 1} })
  additionalProgramme: AdditionalProgramme;
}

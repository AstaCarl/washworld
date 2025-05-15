import { AdditionalProgramme } from 'src/additional_programmes/entities/additional_programme.entity';
import { Hall } from 'src/halls/entities/hall.entity';
import { Programme } from 'src/programmes/entities/programme.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateWashDto {
  startedTimeDate: Date;
  user: User;
  hall: Hall;
  programme: Programme;
  additionalProgramme: AdditionalProgramme;
}

import { AdditionalProgramme } from 'src/additional_programmes/entities/additional_programme.entity';
import { Programme } from '../../programmes/entities/programme.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Hall } from 'src/halls/entities/hall.entity';

@Entity()
export class Wash {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  startedTimeDate: Date;

  @ManyToOne(() => Programme, (programme) => programme.washes, {})
  programme: Programme;

  @ManyToOne(
    () => AdditionalProgramme,
    (additionalProgramme) => additionalProgramme.washes,
    { nullable: true },
  )
  additionalProgramme: AdditionalProgramme;

  @ManyToOne(() => User, (user) => user.washes, {})
  user: User;

  @ManyToOne(() => Hall, (hall) => hall.washes, {})
  hall: Hall;
}

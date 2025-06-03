import { AdditionalProgramme } from '../../../src/additional_programmes/entities/additional_programme.entity';
import { Programme } from '../../../src/programmes/entities/programme.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../../src/users/entities/user.entity';
import { Hall } from '../../../src/halls/entities/hall.entity';

@Entity()
export class Wash {
  @PrimaryGeneratedColumn() // Autoincrementing primary key
  id: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  startedTimeDate: Date;

  @ManyToOne(() => Programme, (programme) => programme.washes, {onDelete: 'CASCADE'}) //if programme is deleted, all washes with this programme will also be deleted
  programme: Programme;

  @ManyToOne(
    () => AdditionalProgramme,
    (additionalProgramme) => additionalProgramme.washes,
    { nullable: true, onDelete: 'CASCADE' },
  )
  additionalProgramme: AdditionalProgramme;

  @ManyToOne(() => User, (user) => user.washes, {})
  user: User;

  @ManyToOne(() => Hall, (hall) => hall.washes, {})
  hall: Hall;
}

import { AdditionalProgramme } from 'src/additional_programmes/entities/additional_programme.entity';
import { Programme } from '../../programmes/entities/programme.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Hall } from 'src/halls/entities/hall.entity';

@Entity()
export class Wash {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  startedTimeDate: Date;

  @ManyToOne(() => Programme, (programme) => programme.washes, {})
  programme: Programme;

  @ManyToOne(
    () => AdditionalProgramme,
    (additionalProgramme) => additionalProgramme.washes,
    {},
  )
  additionalProgramme: AdditionalProgramme;

  @OneToMany(() => User, (user) => user.wash, {})
  users: User[];

  @OneToMany(() => Hall, (hall) => hall.wash, {})
  halls: Hall[];
}

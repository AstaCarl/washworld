import { Coordinate } from '../../../src/coordinates/entities/coordinate.entity';
import { Hall } from '../../../src/halls/entities/hall.entity';
import { OpeningHour } from '../../../src/opening_hours/entities/opening_hour.entity';
import { User } from '../../../src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => OpeningHour, (openingHour) => openingHour.location, {})
  openingHours: OpeningHour;

  @OneToOne(() => Coordinate, (coordinate) => coordinate.location, {})
  @JoinColumn()
  coordinate: Coordinate;

  @OneToMany(() => User, (user) => user.location)
  users: User[];

  @OneToMany(() => Hall, (hall) => hall.location)
  halls: Hall[];
}

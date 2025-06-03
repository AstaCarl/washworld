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

// Entity to define the location schema in the database
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
  @JoinColumn() // tells typeORM that location owns the coordinate FK
  coordinate: Coordinate;

  @OneToMany(() => User, (user) => user.location)
  users: User[];

  @OneToMany(() => Hall, (hall) => hall.location)
  halls: Hall[];
}

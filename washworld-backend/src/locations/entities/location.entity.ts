import { Coordinate } from 'src/coordinates/entities/coordinate.entity';
import { OpeningHour } from 'src/opening_hours/entities/opening_hour.entity';
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
}

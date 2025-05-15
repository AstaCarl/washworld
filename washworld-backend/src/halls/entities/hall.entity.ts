import { Location } from 'src/locations/entities/location.entity';
import { Wash } from 'src/washes/entities/wash.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Location, (location) => location.halls, {})
  location: Location;

  @OneToMany(() => Wash, (wash) => wash.hall, { nullable: true })
  washes: Wash;

  @Column()
  operationalStatus: boolean; // true = operational, false = not operational
}

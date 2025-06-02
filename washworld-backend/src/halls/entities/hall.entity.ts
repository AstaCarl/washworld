import { Location } from '../../../src/locations/entities/location.entity';
import { Wash } from '../../../src/washes/entities/wash.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entity to define the hall schema in the database
@Entity()
export class Hall {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Location, (location) => location.halls, {})
  location: Location;

  @OneToMany(() => Wash, (wash) => wash.hall, { nullable: true })
  washes: Wash;

  @Column()
  operationalStatus: boolean; 
}

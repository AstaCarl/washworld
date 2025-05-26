import { ApiProperty } from '@nestjs/swagger';
import { Location } from 'src/locations/entities/location.entity';
import { Wash } from 'src/washes/entities/wash.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Hall {
  // @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  // @ApiProperty()
  @ManyToOne(() => Location, (location) => location.halls, {})
  location: Location;

  // @ApiProperty()
  @OneToMany(() => Wash, (wash) => wash.hall, { nullable: true })
  washes: Wash;

  // @ApiProperty()
  @Column()
  operationalStatus: boolean; // true = operational, false = not operational
}

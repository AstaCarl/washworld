import { Location } from 'src/locations/entities/location.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Coordinate {
  @PrimaryGeneratedColumn()
  id: number;

  // Added double precision to the latitude and longitude columns to accurately store the coordinates
  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @OneToOne(() => Location, (location) => location.coordinate, {})
   location: Location;
}

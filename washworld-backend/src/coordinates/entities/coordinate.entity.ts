import { Location } from '../../../src/locations/entities/location.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Coordinate {
  @PrimaryGeneratedColumn()
  id: number;

  // Added double precision to ensure that latitude and longitude can handle decimal values accurately
  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @OneToOne(() => Location, (location) => location.coordinate, {})
   location: Location;
}

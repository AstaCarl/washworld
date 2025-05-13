import { Location } from 'src/locations/entities/location.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Coordinate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToOne(() => Location, (location) => location.coordinate, {})
   location: Location;
}

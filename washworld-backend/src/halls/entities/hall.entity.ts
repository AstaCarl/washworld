import { Location } from "src/locations/entities/location.entity";
import { Wash } from "src/washes/entities/wash.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hall {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Location, (location) => location.halls, {})
    location: Location;

    @ManyToOne(() => Wash, (wash) => wash.halls, {})
    wash: Wash;

    @Column()
    operationalStatus: boolean; // true = operational, false = not operational
}

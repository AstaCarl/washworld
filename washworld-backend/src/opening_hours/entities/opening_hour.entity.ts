import { Location } from "../../../src/locations/entities/location.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// Entity to define the opening hour schema in the database
@Entity()
export class OpeningHour {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        openHours: string;

        @OneToMany(() => Location, (location) => location.openingHours, {})
        location: Location;
}

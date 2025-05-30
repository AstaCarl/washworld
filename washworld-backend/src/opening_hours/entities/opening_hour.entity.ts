import { Location } from "../../../src/locations/entities/location.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class OpeningHour {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        openHours: string;

        @OneToMany(() => Location, (location) => location.openingHours, {})
        location: Location;
}

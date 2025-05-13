import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class OpeningHour {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        openHours: string;

    }

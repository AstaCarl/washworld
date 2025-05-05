import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class AdditionalProgramme {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        name: string;
        
        @Column() 
        price: number;
    
        @Column()
        runTimeInSeconds: number;
    }

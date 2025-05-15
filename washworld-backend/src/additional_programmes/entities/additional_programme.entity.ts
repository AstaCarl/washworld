import { Wash } from "src/washes/entities/wash.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

        @OneToMany(() => Wash, (wash) => wash.additionalProgramme, {})
        washes: Wash[];
    }

import { Wash } from "src/washes/entities/wash.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Programme {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column() 
    price: number;

    @Column()
    runTimeInSeconds: number;

    @OneToMany(() => Wash, (wash) => wash.programme, {})
    washes: Wash[];
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

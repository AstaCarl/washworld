import { ApiProperty } from "@nestjs/swagger";
import { Wash } from "../../../src/washes/entities/wash.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// Entity to define the programme schema in the database
@Entity()
export class Programme {
    @ApiProperty() // Swagger documentation for the property
    @PrimaryGeneratedColumn() // Auto-generated primary key
    id: number;

    @ApiProperty()
    @Column() // Column decorator for database field
    name: string;
    
    @ApiProperty()
    @Column() 
    price: number;

    @ApiProperty()
    @Column()
    runTimeInSeconds: number;

    @ApiProperty()
    @OneToMany(() => Wash, (wash) => wash.programme, {cascade: true, onDelete: 'CASCADE'}) // if you delete a programme, all related washes will also be deleted
    washes: Wash[];
}

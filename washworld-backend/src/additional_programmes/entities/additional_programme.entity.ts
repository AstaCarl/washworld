import { ApiProperty } from '@nestjs/swagger';
import { Wash } from '../../washes/entities/wash.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Entity to define the additional programme schema in the database
@Entity()
export class AdditionalProgramme {
  @ApiProperty() // Swagger documentation for the property
  @PrimaryGeneratedColumn() // Auto-generated primary key
  id: number;

  @ApiProperty()
  @Column() 
  name: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  runTimeInSeconds: number;

  @ApiProperty()
  @OneToMany(() => Wash, (wash) => wash.additionalProgramme, {cascade: true, onDelete: 'CASCADE'})
  washes: Wash[];
}

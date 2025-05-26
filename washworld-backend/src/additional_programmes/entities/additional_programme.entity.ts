import { ApiProperty } from '@nestjs/swagger';
import { Wash } from 'src/washes/entities/wash.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class AdditionalProgramme {
  @ApiProperty() // Swagger documentation for the property
  @PrimaryGeneratedColumn() // Auto-generated primary key
  id: number;

  @ApiProperty()
  @Column() // Column decorater for database field
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
  @OneToMany(() => Wash, (wash) => wash.additionalProgramme, {})
  washes: Wash[];
}

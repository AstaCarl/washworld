import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    license: string;

    @Column()
    membership: number;

    @Column()
    primaryLocation: number;

    @Column()
    currentLocation: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}

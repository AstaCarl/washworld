import { User } from "../../../src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

// Entity to define the membership schema in the database
@Entity()
export class Membership {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @OneToMany(() => User, (user) => user.membership)
    users: User[];
}

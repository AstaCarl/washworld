import { Membership } from "../../../src/memberships/entities/membership.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "../../../src/locations/entities/location.entity";
import { Wash } from "../../../src/washes/entities/wash.entity";
import { Role } from "../Role";

// entity to define the user shcema in the database
@Entity()
export class User {
    @PrimaryGeneratedColumn() // Autoincrementing primary key
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

    @ManyToOne(() => Membership, (membership) => membership.users)
    membership: Membership;

    @ManyToOne(() => Location, (location) => location.users)
    location?: Location;

    @OneToMany(() => Wash, (wash) => wash.user)
    washes: Wash;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    // Enum to define user roles in the database
    @Column({
        type: 'enum', // restricts the values to the ones defined in the Role enum
        enum: Role,
        default: [Role.User],
    })
    role: Role;
}

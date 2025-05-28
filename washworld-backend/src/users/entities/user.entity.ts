import { Membership } from "src/memberships/entities/membership.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/locations/entities/location.entity";
import { Wash } from "src/washes/entities/wash.entity";
import { Role } from "../Role";

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

    // @Column()
    // license: string;

    @ManyToOne(() => Membership, (membership) => membership.users)
    membership: Membership;

    @ManyToOne(() => Location, (location) => location.users)
    location: Location;

    @OneToMany(() => Wash, (wash) => wash.user)
    washes: Wash;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({
        type: 'enum',
        enum: Role,
        default: [Role.User],
    })
    role: Role;
}

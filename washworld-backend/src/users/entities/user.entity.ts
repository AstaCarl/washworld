import { Membership } from "src/memberships/entities/membership.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/locations/entities/location.entity";

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

    @ManyToOne(() => Membership, (membership) => membership.users)
    membership: Membership;

    @ManyToOne(() => Location, (location) => location.users)
    location: Location;

    @Column()
    currentLocation: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}

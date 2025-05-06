import { Membership } from "src/memberships/entities/membership.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    // @Column()
    // membership: number;

    @ManyToOne(() => Membership, (membership) => membership.users)
    membership: Membership;

    @Column()
    primaryLocation: number;

    @Column()
    currentLocation: number;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}

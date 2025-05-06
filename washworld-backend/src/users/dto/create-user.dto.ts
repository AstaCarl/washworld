import { Membership } from "src/memberships/entities/membership.entity";

export class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    license: string;
    membership: Membership;
    primaryLocation: number;
    currentLocation: number;
    createdAt: Date;
}

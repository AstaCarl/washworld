import { Location } from "src/locations/entities/location.entity";
import { Membership } from "src/memberships/entities/membership.entity";

export class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    license: string;
    membership: Membership;
    location: Location;
    currentLocation: number;
    createdAt: Date;
}

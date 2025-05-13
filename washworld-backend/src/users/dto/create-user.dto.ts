import { Location } from "src/locations/entities/location.entity";
import { Membership } from "src/memberships/entities/membership.entity";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    license: string;

    @IsNotEmpty()
    membership: Membership;

    @IsNotEmpty()
    location: Location;

    currentLocation: number;

    createdAt: Date;
}

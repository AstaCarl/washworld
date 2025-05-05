export class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    license: string;
    membership: number;
    primaryLocation: number;
    currentLocation: number;
    createdAt: Date;
}

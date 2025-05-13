export class UserDto {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public license: string,
    public membership: number | null,
    public location: number | null,
    public currentLocation: number,
    public createdAt: Date
  ) {}
}

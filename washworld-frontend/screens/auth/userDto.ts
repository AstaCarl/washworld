export class UserDto {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public license: string,
    public membership: number,
    public location: number,
    public currentLocation: number,
    public createdAt: Date
  ) {}
}

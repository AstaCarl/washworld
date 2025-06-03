// User Data Transfer Object (DTO) to define the structure of user data
export class UserDto {
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public license: string,
    public membership: number,
    public location: number,
    public createdAt: Date
  ) {}
}

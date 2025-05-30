import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';
import { first } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async upgrade(userId: number) {
    return this.usersService.upgrade(userId);
  }

  async signup(user: any) {
    const existingUser = await this.usersService.findOne(user.email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Map the incoming user data to the CreateUserDto
    const createUserDto = new CreateUserDto();
    createUserDto.firstname = user.firstname;
    createUserDto.lastname = user.lastname;
    createUserDto.email = user.email;
    createUserDto.password = user.password;
    createUserDto.license = user.license;
    createUserDto.membership = user.membership;
    createUserDto.location = user.location;
    // createUserDto.currentLocation = user.currentLocation;

    const createdUser = await this.usersService.create(createUserDto);

    const payload = {
      email: createdUser.email,
      id: createdUser.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: createdUser.id,
        membership: createdUser.membership,
      },
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: any) {
    const userFromDb = await this.usersService.findOne(user.email);

    if (!userFromDb) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      email: user.email,
      id: userFromDb.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      membership: userFromDb.membership,
      firstname: userFromDb.firstname,
      lastname: userFromDb.lastname,
    };
  }
}

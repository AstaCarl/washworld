import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './Role';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) // repository makes it possible to interact with the database through the methods provided by TypeORM: find, save, delete...
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto); // Create a new user instance
    return this.userRepository.save(newUser); 
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async upgrade(userId: number) {
    const user = await this.findById(userId); // Finding the user by the userId
    user.role = Role.Admin; // Changing the role in memory.

    return this.userRepository.save(user); // Saving the updated user obj. into database
  }

  async findOne(email: string): Promise<User | null> {
    const result = await this.userRepository.findOne({
      where: { email: email },
    });
    return result || null; // Return null if the user is not found
  }

}

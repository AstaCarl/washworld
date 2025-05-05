import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   const newUser = this.userRepository.create(createUserDto);
  //   return this.userRepository.save(newUser);
  // }

  findAll() {
    return `This action returns all users`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  // async upgrade(userId: number) {
  //   const user = await this.findUserById(userId); // Finding the user by the userId
  //   user.role = Role.PremiumUser; // Changing the role in memory. 
    
  //   return this.userRepository.save(user); // Saving the updated user obj. into database
  // }

  async findUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async findOne(email: string): Promise<User | null> {
    const result = await this.userRepository.findOne({
      where: { email: email},
    });
    return result || null; // Return null if the user is not found
  }

  // async findOneById(userId: number): Promise<User> {
  //   const result = await this.userRepository.findOne({ where: { id: userId } });
  //   // console.log("findOne user service", result);

  //   if (!result) {
  //     throw new Error(`User with username ${userId} not found`);
  //   }
  //   return result;
  // }

  // async findById(id: number): Promise<User> {
  //   const result = await this.userRepository.findOne({
  //     where: { id: id },
  //     relations: ['category', 'entries'],
  //   });
  //   // console.log("findOne user service", result);

  //   if (!result) {
  //     throw new Error(`User with username ${id} not found`);
  //   }
  //   return result;
  // }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto); // Create a new user instance
    return this.userRepository.save(newUser); // Never save passwords in clear text!
  }

  // async remove(id: number) {
  //   const user = await this.userRepository.findOne({ where: { id: id } });
  //   if (!user) {
  //     throw new Error(`User with id ${id} not found`);
  //   }
  //   return this.userRepository.remove(user); // This will remove the user from the database
  // }
}

import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { Role } from '../users/Role'
import { UsersService } from './../users/users.service'

//Used with JWT guard to allow only admin access to endpoint.
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(@Inject(UsersService) private usersService: UsersService) {}
  
  // This guard checks if the user is an admin
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const userId: number = request.user.id
    const user = await this.usersService.findById(userId);

    // This returns true if there is a user and the user is an admin
    return user && user.role === Role.Admin
  }
}
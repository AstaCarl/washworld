// import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
// import { Role } from '../users/Role'
// import { UsersService } from './../users/users.service'

// //Used with JWT guard to allow only admin access to endpoint.
// @Injectable()
// export class TenantGuard implements CanActivate {
//   constructor(@Inject(UsersService) private usersService: UsersService) {}
  
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest()
//     const userId: number = request.user.id

//     console.log("User ID in TenantGuard:", userId)

//     const user = await this.usersService.findUserById(userId);

    
//     console.log("User found in TenantGuard:", user);


//     // This returns true if there is a user and
//     // the user is an admin
//     return user && user.role === Role.User
//   }
// }
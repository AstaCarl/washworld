import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
// checks the user's credentials against the database
export class LocalStrategy extends PassportStrategy(Strategy) { 
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    
    const user = await this.authService.validateUser(email, password);
    
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
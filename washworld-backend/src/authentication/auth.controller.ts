import {
  Controller,
  Post,
  UseGuards,
  Request as Request2,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';
import { LoginResponseDto } from '../../src/users/dto/login-user.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/upgrade')
  upgrade(@Request2() req) { 
    return this.authService.upgrade(req.user.id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiOperation({ summary: 'POST to log in' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' }
      },
    }
  })
  @ApiResponse({ status: 201, description: 'login successful.', type: LoginResponseDto})
  async login(@Request2() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiBody({
    type: CreateUserDto,
    description: 'The user details for signing up',
  })
  @ApiResponse({ status: 201, description: 'User created successfully.', type: LoginResponseDto})
  async signup(@Request2() req) {
    return this.authService.signup(req.body);
  }
}

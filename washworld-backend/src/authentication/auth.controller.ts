import {
  Controller,
  Post,
  UseGuards,
  Request as Request2,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('auth/upgrade')
  upgrade(@Request2() req) {
    return this.authService.upgrade(req.user.id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request2() req) {
    console.log('login', req.user);
    return this.authService.login(req.user);
  }

  @Post('auth/signup')
  @ApiOperation({ summary: 'Sign up a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  async signup(@Request2() req) {
    console.log('body', req.body);
    return this.authService.signup(req.body);
  }
}

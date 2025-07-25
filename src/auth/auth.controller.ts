import { Controller, Post, Body, UsePipes, ValidationPipe, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() registerDto: RegisterDto) {
    try {
      const user = await this.authService.register(registerDto);
      return this.authService.login(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

@Post('login')
@UsePipes(new ValidationPipe())
async login(@Body() loginDto: LoginDto) {
  const user = await this.authService.validateUser(loginDto);
  if (!user) {
    throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
  return this.authService.login(user);
}
}

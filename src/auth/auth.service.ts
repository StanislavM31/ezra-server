import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const { username, password } = registerDto;

    
    const existing = await this.userModel.findOne({ username });
    if (existing) {
      throw new Error('User already exists');
    }

    
    const hashedPassword = await bcrypt.hash(password, 1);
    const user = new this.userModel({ 
      username,
      password: hashedPassword,
    });
    
    return user.save();
  }

  async validateUser(loginDto: LoginDto): Promise<User> {
    const user = await this.userModel.findOne({ username: loginDto.username });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async login(user: User) {
    const payload = { 
      username: user.username, 
      sub: user._id 
    };

    return {
      access_token: `fake-jwt-token-for-${user._id}`,
      user: {
        id: user._id,
        username: user.username,
      },
    };
  }
}
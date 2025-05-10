import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/CreateUserDto.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}

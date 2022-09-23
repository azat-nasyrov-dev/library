import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.usersService.getUserById(id)
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
    return this.usersService.updateUserById(id, userDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.removeUserById(id)
  }
}
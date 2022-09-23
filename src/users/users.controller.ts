import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получение одного пользователя по ID' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.usersService.getUserById(id)
  }

  @ApiOperation({ summary: 'Обновление текущего пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Put(':id')
  update(@Param('id') id: number, @Body() userDto: UpdateUserDto) {
    return this.usersService.updateUserById(id, userDto)
  }

  @ApiOperation({ summary: 'Удаление текущего пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.removeUserById(id)
  }
}
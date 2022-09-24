import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BooksService } from '../books/books.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private bookService: BooksService) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const book = await this.bookService.getBookById(1);
    await user.$set('books', [book.id]);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }

  async updateUserById(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    await user.update({...dto});
    await user.save();
    return user;
  }

  async removeUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    await user.destroy();
    return user;
  }
}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { UserBooks } from '../books/user-books.model';
import { Book } from 'src/books/books.model';
import { BooksModule } from '../books/books.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, UserBooks, Book]),
    BooksModule
  ]
})
export class UsersModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './books.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private bookRepository: typeof Book) {}

  async createBook(dto: CreateBookDto) {
    const book = await this.bookRepository.create(dto);
    return book;
  }

  async getAllBooks() {
    const books = await this.bookRepository.findAll();
    return books;
  }

  async getBookById(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    return book;
  }

  async updateBookById(id: number, dto: UpdateBookDto) {
    const book = await this.bookRepository.findOne({ where: { id } });
    await book.update({...dto});
    await book.save();
    return book;
  }

  async removeBookById(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    await book.destroy();
    return book;
  }
}

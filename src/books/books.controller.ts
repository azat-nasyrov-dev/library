import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  create(@Body() bookDto: CreateBookDto) {
    return this.bookService.createBook(bookDto);
  }

  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.bookService.getBookById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() bookDto: UpdateBookDto) {
    return this.bookService.updateBookById(id, bookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.removeBookById(id);
  }
}

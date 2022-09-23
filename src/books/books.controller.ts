import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from './books.model';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @ApiOperation({ summary: 'Создание книги' })
  @ApiResponse({ status: 200, type: Book })
  @Post()
  create(@Body() bookDto: CreateBookDto) {
    return this.bookService.createBook(bookDto);
  }

  @ApiOperation({ summary: 'Получение всех книг' })
  @ApiResponse({ status: 200, type: [Book] })
  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }

  @ApiOperation({ summary: 'Получение одной книги по ID' })
  @ApiResponse({ status: 200, type: Book })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.bookService.getBookById(id);
  }

  @ApiOperation({ summary: 'Обновление текущей книги' })
  @ApiResponse({ status: 200, type: Book })
  @Put(':id')
  update(@Param('id') id: number, @Body() bookDto: UpdateBookDto) {
    return this.bookService.updateBookById(id, bookDto);
  }

  @ApiOperation({ summary: 'Удаление текущей книги' })
  @ApiResponse({ status: 200, type: Book })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.removeBookById(id);
  }
}

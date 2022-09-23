import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface BookCreationAttrs {
  title: string;
  author: string;
}

@Table({ tableName: 'books' })
export class Book extends Model<Book, BookCreationAttrs> {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Clean Architecture', description: 'Название книги' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Robert Martin', description: 'Автор книги' })
  @Column({ type: DataType.STRING, allowNull: false })
  author: string;
}
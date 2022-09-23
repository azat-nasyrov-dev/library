import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../books/books.model';
import { UserBooks } from '../books/user-books.model';

interface UserCreationAttrs {
  firstName: string;
  lastName: string;
  age: number;
  isFree: boolean;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'John', description: 'Имя' })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Фамилия' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({ example: '30', description: 'Возраст' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @ApiProperty({ example: 'true', description: 'Холост/Женат' })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isFree: boolean;

  @BelongsToMany(() => Book, () => UserBooks)
  books: Book[];
}
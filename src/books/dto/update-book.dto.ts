import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({ example: 'Clean Architecture', description: 'Название книги' })
  readonly title: string;

  @ApiProperty({ example: 'Robert Martin', description: 'Автор книги' })
  readonly author: string;
}
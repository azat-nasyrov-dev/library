import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  readonly id: number;

  @ApiProperty({ example: 'John', description: 'Имя' })
  readonly firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Фамилия' })
  readonly lastName: string;

  @ApiProperty({ example: '30', description: 'Возраст' })
  readonly age: number;

  @ApiProperty({ example: 'true', description: 'Холост/Женат' })
  readonly isFree: boolean;
}
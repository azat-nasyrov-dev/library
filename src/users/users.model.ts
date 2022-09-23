import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  firstName: string;
  lastName: string;
  age: number;
  isFree: boolean;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  firstName: string;

  @Column({type: DataType.STRING, allowNull: false})
  lastName: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  age: number;

  @Column({type: DataType.BOOLEAN, allowNull: false})
  isFree: boolean;
}
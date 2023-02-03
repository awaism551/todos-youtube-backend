import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Unique identifier for the todo' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Todo title', description: 'Title of the todo' })
  title: string;
}
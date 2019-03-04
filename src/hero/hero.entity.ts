import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 'length': 200 })
  name: string;

  @Column('int')
  age: number;
}
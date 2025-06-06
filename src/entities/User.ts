import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true,})
  id!: number;

  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({type: 'varchar', length: 100, unique: true})
  email!: string;
}

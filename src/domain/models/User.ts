import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 200 })
  password: string;
}
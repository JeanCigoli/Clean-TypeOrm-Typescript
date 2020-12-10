import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('dashboard')
export class Dashboard {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column("text")
  title: string;

  @Column("text")
  text: string;

  @Column("varchar", { length: 200 })
  image: string;
}
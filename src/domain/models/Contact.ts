import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 200 })
  email: string;

  @Column("varchar", { length: 200 })
  subject: string;

  @Column("text")
  message: string;

  @CreateDateColumn()
  created_at: Date;
}
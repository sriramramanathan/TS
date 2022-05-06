import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cards" })
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  title: string;

  @Column("text")
  tablename: string;
}

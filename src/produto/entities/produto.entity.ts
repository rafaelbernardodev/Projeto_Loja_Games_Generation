import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  plataforma: string;

  @IsNumber()
  @Min(0)
  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Column({ type: 'int', nullable: true })
  estoque: number | null;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}

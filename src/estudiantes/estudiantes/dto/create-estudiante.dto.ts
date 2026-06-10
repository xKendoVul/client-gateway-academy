import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEstudianteDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  nombres!: string;

  @IsString()
  @IsNotEmpty()
  paterno!: string;

  @IsString()
  @IsOptional()
  materno?: string;

  @IsNumber()
  @IsNotEmpty()
  sexo_id!: number;

  @IsString()
  @IsNotEmpty()
  direccion!: string;

  @IsNumber()
  @IsNotEmpty()
  etnia_id!: number;

  @IsDate()
  @IsOptional()
  created_at?: Date;

  @IsDate()
  @IsOptional()
  updated_at?: Date;
}

export class UpdateEstudianteDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  nombres?: string;

  @IsString()
  @IsOptional()
  paterno?: string;

  @IsString()
  @IsOptional()
  materno?: string;

  @IsNumber()
  @IsOptional()
  sexo_id?: number;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsNumber()
  @IsOptional()
  etnia_id?: number;

  @IsDate()
  @IsOptional()
  created_at?: Date;

  @IsDate()
  @IsOptional()
  updated_at?: Date;
}
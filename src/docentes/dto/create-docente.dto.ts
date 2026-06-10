import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDocenteDto {

  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  nombres!: string;

  @IsString()
  @IsNotEmpty()
  apellidos!: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsString()
  @IsOptional()
  cedula?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsNumber()
  @IsNotEmpty()
  etnia_id!: number

  @IsNumber()
  @IsNotEmpty()
  cargo_id!: number

  @IsNumber()
  @IsNotEmpty()
  sexo_id!: number

}

export class UpdateDocenteDto {
  @IsString()
  @IsOptional()
  nombres?: string;

  @IsString()
  @IsOptional()
  apellidos?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  direccion?: string;

  @IsString()
  @IsOptional()
  cedula?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsNumber()
  @IsOptional()
  etnia_id?: number;

  @IsNumber()
  @IsOptional()
  cargo_id?: number;

  @IsNumber()
  @IsOptional()
  sexo_id?: number;
}
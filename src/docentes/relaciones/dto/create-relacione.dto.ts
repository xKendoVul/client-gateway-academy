import { IsString } from "class-validator";

export class CreateSexoDto {
  @IsString()
  sexo!: string
}

export class CreateEtniaDto {
  @IsString()
  etnia!: string
}

export class CreateCargoDto {
  @IsString()
  cargo!: string
}
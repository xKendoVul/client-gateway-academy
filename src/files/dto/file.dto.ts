import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum FileModelType {
  ESTUDIANTE = 'estudiante',
  DOCENTE = 'docente',
}

export enum FileType {
  FOTO_PERFIL = 'foto_perfil',
  DOCUMENTO = 'documento',
}

export class FileQueryDto {
  @IsEnum(FileModelType)
  @IsNotEmpty()
  model_type: FileModelType;

  @IsNumber()
  @IsNotEmpty()
  model_id: number;

  @IsEnum(FileType)
  @IsOptional()
  file_type?: FileType;
}
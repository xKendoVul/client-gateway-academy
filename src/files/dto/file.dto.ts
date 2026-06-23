import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

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

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  model_id: number;

  @IsEnum(FileType)
  @IsOptional()
  file_type?: FileType;
}

export class UploadBodyDto {
  @IsEnum(FileModelType)
  @IsNotEmpty()
  model_type: FileModelType;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  model_id: number;

  @IsEnum(FileType)
  @IsOptional()
  file_type?: FileType;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  user_updated_id: number;
}

export class UpdateFileDto {
  @IsEnum(FileModelType)
  @IsOptional()
  model_type?: FileModelType;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  model_id?: number;

  @IsEnum(FileType)
  @IsOptional()
  file_type?: FileType;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  user_updated_id?: number;
}

import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';
import { CreateEtniaDto, CreateSexoDto } from './dto/create-relacione.dto';
import { firstValueFrom, timeout } from 'rxjs';

@Controller('estudiantes/sexo')
export class SexoController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE)
    private readonly estudianteClient: ClientProxy,
  ) {}

  @Post()
  async create(@Body() sexoDto: CreateSexoDto) {
    try {
      const obs = this.estudianteClient.send({ cmd: 'crear_sexo' }, sexoDto);
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException('Error al crear sexo', HttpStatus.BAD_GATEWAY);
    }
  }

  @Get()
  async findAll() {
    try {
      const obs = this.estudianteClient.send({ cmd: 'encontrar_sexos' }, {});
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException('Error al obtener sexos', HttpStatus.BAD_GATEWAY);
    }
  }
}

@Controller('estudiantes/etnia')
export class EtniaController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE)
    private readonly estudianteClient: ClientProxy,
  ) {}

  @Post()
  async create(@Body() etniaDto: CreateEtniaDto) {
    try {
      const obs = this.estudianteClient.send({ cmd: 'crear_etnia' }, etniaDto);
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException('Error al crear etnia', HttpStatus.BAD_GATEWAY);
    }
  }

  @Get()
  async findAll() {
    try {
      const obs = this.estudianteClient.send({ cmd: 'encontrar_etnias' }, {});
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException(
        'Error al obtener etnias',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}

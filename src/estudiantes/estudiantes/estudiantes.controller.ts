import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';
import {
  CreateEstudianteDto,
  UpdateEstudianteDto,
} from './dto/create-estudiante.dto';
import { firstValueFrom, timeout } from 'rxjs';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE)
    private readonly estudianteClient: ClientProxy,
  ) {}

  @Get()
  async findAll() {
    try {
      const obs = this.estudianteClient.send(
        { cmd: 'encontrar_todos_estudiantes' },
        {},
      );
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException(
        'Error al obtener estudiantes',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const obs = this.estudianteClient.send(
        { cmd: 'encontrar_estudiante' },
        { id },
      );
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException(
        'Error al obtener estudiante',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Post()
  async create(@Body() estudianteDto: CreateEstudianteDto) {
    try {
      const obs = this.estudianteClient.send(
        { cmd: 'create_student' },
        estudianteDto,
      );
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException(
        'Error al crear estudiante',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() estudianteDto: UpdateEstudianteDto,
  ) {
    try {
      const obs = this.estudianteClient.send(
        { cmd: 'actualizar_estudiante' },
        { id, ...estudianteDto },
      );
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException(
        'Error al actualizar estudiante',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      const obs = this.estudianteClient.send({ cmd: 'delete_student' }, { id });
      const result = await firstValueFrom(obs.pipe(timeout(5000)));
      return result;
    } catch (err: any) {
      throw new HttpException(
        'Error al eliminar estudiante',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}

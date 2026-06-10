import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';
import { CreateEstudianteDto, UpdateEstudianteDto } from './dto/create-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE)
    private readonly estudianteClient: ClientProxy,
  ) { }

  @Get()
  findAll() {
    return this.estudianteClient.send({ cmd: 'encontrar_todos_estudiantes' }, {})
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteClient.send({ cmd: 'encontrar_estudiante' }, { id })
  }

  @Post()
  create(@Body() estudianteDto: CreateEstudianteDto) {
    return this.estudianteClient.send({ cmd: 'create_student' }, estudianteDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() estudianteDto: UpdateEstudianteDto) {
    return this.estudianteClient.send({ cmd: 'actualizar_estudiante' }, { id, ...estudianteDto })
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteClient.send({ cmd: 'delete_student' }, { id })

  }
}
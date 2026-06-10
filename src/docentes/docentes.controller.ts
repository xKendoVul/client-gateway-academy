import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateDocenteDto, UpdateDocenteDto } from './dto/create-docente.dto';
import { ClientProxy } from '@nestjs/microservices';
import { DOCENTE_SERVICE } from 'src/config/service';

@Controller('docentes')
export class DocentesController {
  constructor(
    @Inject(DOCENTE_SERVICE)
    private readonly docenteClient: ClientProxy
  ) { }

  @Post()
  create(@Body() docenteDto: CreateDocenteDto) {
    return this.docenteClient.send({ cmd: 'crear_docente' }, docenteDto);
  }

  @Get()
  findAll() {
    return this.docenteClient.send({ cmd: 'encontrar_todos_docentes' }, {});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.docenteClient.send({ cmd: 'encontrar_docente' }, { id });
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDocenteDto: UpdateDocenteDto) {
    return this.docenteClient.send({ cmd: 'actualizar_docente' }, { id, ...updateDocenteDto });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.docenteClient.send({ cmd: 'eliminar_docente' }, { id });
  }
}
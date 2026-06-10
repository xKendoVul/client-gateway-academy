import { Body, Controller, Get, Inject, Post } from "@nestjs/common"
import { ClientProxy } from "@nestjs/microservices"
import { ESTUDIANTE_SERVICE } from "src/config/service"
import { CreateEtniaDto, CreateSexoDto } from "./dto/create-relacione.dto"

@Controller('estudiantes/sexo')
export class SexoController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE)
    private readonly estudianteClient: ClientProxy) { }

  @Post()
  create(@Body() sexoDto: CreateSexoDto) {
    return this.estudianteClient.send({ cmd: "crear_sexo" }, sexoDto)
  }

  @Get()
  findAll() {
    return this.estudianteClient.send({ cmd: "encontrar_sexos" }, {})
  }
}

@Controller("estudiantes/etnia")
export class EtniaController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE)
    private readonly estudianteClient: ClientProxy) { }

  @Post()
  create(@Body() etniaDto: CreateEtniaDto) {
    return this.estudianteClient.send({ cmd: "crear_etnia" }, etniaDto)
  }

  @Get()
  findAll() {
    return this.estudianteClient.send({ cmd: "encontrar_etnias" }, {})
  }
}
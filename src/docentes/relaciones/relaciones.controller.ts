import { Body, Controller, Get, Inject, Post } from "@nestjs/common"
import { ClientProxy } from "@nestjs/microservices"
import { DOCENTE_SERVICE } from "src/config/service"
import { CreateEtniaDto, CreateSexoDto, CreateCargoDto } from "./dto/create-relacione.dto"

@Controller('docentes/sexo')
export class SexoController {
  constructor(
    @Inject(DOCENTE_SERVICE)
    private readonly docenteClient: ClientProxy) { }

  @Post()
  create(@Body() sexoDto: CreateSexoDto) {
    return this.docenteClient.send({ cmd: "crear_sexo" }, sexoDto)
  }

  @Get()
  findAll() {
    return this.docenteClient.send({ cmd: "encontrar_sexos" }, {})
  }
}

@Controller("docentes/etnia")
export class EtniaController {
    j
  constructor(
    @Inject(DOCENTE_SERVICE)
    private readonly docenteClient: ClientProxy) { }

  @Post()
  create(@Body() etniaDto: CreateEtniaDto) {
    return this.docenteClient.send({ cmd: "crear_etnia" }, etniaDto)
  }

  @Get()
  findAll() {
    return this.docenteClient.send({ cmd: "encontrar_etnias" }, {})
  }
}

@Controller("docentes/cargo")
export class CargoController {
  constructor(
    @Inject(DOCENTE_SERVICE)
    private readonly docenteClient: ClientProxy) { }

  @Post()
  create(@Body() cargoDto: CreateCargoDto) {
    return this.docenteClient.send({ cmd: "crear_cargo" }, cargoDto)
  }

  @Get()
  findAll() {
    return this.docenteClient.send({ cmd: "encontrar_cargos" }, {})
  }
}
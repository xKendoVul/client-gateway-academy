import { Module } from '@nestjs/common';
import {
  SexoController,
  EtniaController,
  CargoController,
} from './relaciones.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DOCENTE_SERVICE } from 'src/config/service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DOCENTE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.DOCENTE_SERVICE_HOST,
          port: Number(process.env.DOCENTE_SERVICE_PORT),
        },
      },
    ]),
  ],
  controllers: [SexoController, EtniaController, CargoController],
})
export class DocenteRelacionesModule {}

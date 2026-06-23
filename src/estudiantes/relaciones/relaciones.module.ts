import { Module } from '@nestjs/common';
import { SexoController, EtniaController } from './relaciones.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ESTUDIANTE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.ESTUDIANTES_SERVICE_HOST ?? '127.0.0.1',
          port: Number(process.env.ESTUDIANTES_SERVICE_PORT ?? 3002),
        },
      },
    ]),
  ],
  controllers: [SexoController, EtniaController],
})
export class RelacionesModule {}

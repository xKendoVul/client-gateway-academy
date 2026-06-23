import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DOCENTE_SERVICE } from '../config/service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: DOCENTE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.DOCENTE_SERVICE_HOST ?? '127.0.0.1',
          port: Number(process.env.DOCENTE_SERVICE_PORT ?? 3003),
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DocenteModule {}

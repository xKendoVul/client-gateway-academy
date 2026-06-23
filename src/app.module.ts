import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocenteModule } from './docentes/docentes.module';
import { DocenteRelacionesModule } from './docentes/relaciones/relaciones.module';
import { EstudiantesModule } from './estudiantes/estudiantes/estudiantes.module';
import { RelacionesModule } from './estudiantes/relaciones/relaciones.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RelacionesModule,
    EstudiantesModule,
    DocenteRelacionesModule,
    DocenteModule,
    FilesModule,
  ],
})
export class AppModule {}

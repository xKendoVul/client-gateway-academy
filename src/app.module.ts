import { Module } from '@nestjs/common';
import { DocenteModule } from './docentes/docentes.module';
import { DocenteRelacionesModule } from './docentes/relaciones/relaciones.module';
import { EstudiantesModule } from './estudiantes/estudiantes/estudiantes.module';
import { RelacionesModule } from './estudiantes/relaciones/relaciones.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    RelacionesModule,
    EstudiantesModule,
    DocenteRelacionesModule,
    DocenteModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
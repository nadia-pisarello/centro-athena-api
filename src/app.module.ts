import { Module } from '@nestjs/common';
import { TurnosModule } from './turnos/turnos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/centrodb'),
    TurnosModule,
    UsuariosModule],

})
export class AppModule { }

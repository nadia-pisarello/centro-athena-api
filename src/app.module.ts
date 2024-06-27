import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TurnosModule } from './turnos/turnos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.4sheukv.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority&appName=CentroAthena`),
    TurnosModule,
    UsuariosModule],

})
export class AppModule { }

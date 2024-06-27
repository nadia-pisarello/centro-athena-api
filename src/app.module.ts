import { Module } from '@nestjs/common';
import { TurnosModule } from './turnos/turnos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';

const URL_CONNECT = process.env.URL_CONNECT

@Module({
  imports: [

    MongooseModule.forRootAsync({
      useFactory: async () => {
        try {
          return {
            uri: URL_CONNECT,
            useUnifiedTopology: true,
          };
        } catch (err) {
          console.error('Error connecting to MongoDB ', err)
          throw err
        };
      }
    }),
    TurnosModule,
    UsuariosModule],

})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TurnosController } from './turnos.controller';
import { TurnosService } from './turnos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Turno, TurnoSchema } from 'src/schemas/turno.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Turno.name, schema: TurnoSchema }])],
  controllers: [TurnosController],
  providers: [TurnosService],
  exports: [TurnosService]
})
export class TurnosModule {
  constructor(private turnosService: TurnosService) { }
}

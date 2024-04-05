import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { CreateTurnoDto } from 'src/dto/create-turno-dto';
import { format, parse } from 'date-fns';
import { UpdateTurnoDto } from 'src/dto/update-turno-dto';

@Controller('turnos')
export class TurnosController {
    constructor(private readonly turnosService: TurnosService) { }

    @Get()
    findAll() {
        return this.turnosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.turnosService.findOne(id)
    }

    @Post()
    create(@Body() turnoDto: CreateTurnoDto) {
        const hora = parse(turnoDto.hora, 'HH:mm', new Date());
        const fecha = parse(turnoDto.fecha, 'dd-MM-yyyy', new Date())
        if (turnoDto.hora) {
            turnoDto.hora = format(hora, "HH:mm");
        }
        if (turnoDto.fecha) {
            turnoDto.fecha = format(fecha, 'dd-MM-yyyy')
        }
        console.log(turnoDto.hora + " " + turnoDto.fecha);
        return this.turnosService.create(turnoDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTurnoDto: UpdateTurnoDto) {
        const fecha = parse(updateTurnoDto.fecha, 'dd-mm-yyyy', new Date())
        updateTurnoDto.fecha = format(fecha, 'dd-MM-yyyy')
        return this.turnosService.update(id, updateTurnoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        console.log('Eliminación exitosa')
        return this.turnosService.delete(id)
    }

}

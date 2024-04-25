import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
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
    async findOne(@Param('id') id: string) {
        const turno = await this.turnosService.findOne(id)
        if (!turno) throw new NotFoundException("El turno no existe")
        return turno
    }

    @Get('fecha/:fecha')
    async findByDate(@Param('fecha') fecha: string) {
        const turnos = await this.turnosService.findByDate(fecha);
        if (!turnos || turnos.length === 0) {
            throw new NotFoundException("No se encontraron turnos para esta fecha");
        }
        return turnos;
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
    async update(@Param('id') id: string, @Body() updateTurnoDto: UpdateTurnoDto) {
        const fecha = parse(updateTurnoDto.fecha, 'dd-mm-yyyy', new Date())
        updateTurnoDto.fecha = format(fecha, 'dd-MM-yyyy')
        const turno = await this.turnosService.update(id, updateTurnoDto);
        if (!turno) throw new NotFoundException("El turno no existe")
        return turno
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const turno = await this.turnosService.delete(id)
        if (!turno) throw new NotFoundException("No existe este turno")
        return turno
    }

}

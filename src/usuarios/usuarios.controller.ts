import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from 'src/dto/create-usuario-dto';
import { UpdateUsuarioDto } from 'src/dto/update-usuario-dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Get()
    findAll() {
        return this.usuariosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usuariosService.findOne(id)
    }

    @Post()
    create(@Body() usuarioDto: CreateUsuarioDto) {
        return this.usuariosService.create(usuarioDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
        return this.usuariosService.update(id, updateUsuarioDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        console.log('Eliminación exitosa')
        return this.usuariosService.delete(id)
    }

}

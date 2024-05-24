import { Controller, Delete, Get, Post, Put, Body, Param, ConflictException, NotFoundException, HttpCode, HttpException, HttpStatus, UnauthorizedException, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from 'src/dto/create-usuario-dto';
import { UpdateUsuarioDto } from 'src/dto/update-usuario-dto';
import { JwtService } from '@nestjs/jwt';

@Controller('usuarios')
@UseInterceptors(ClassSerializerInterceptor)
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService
    ) { }

    @Get()
    findAll() {
        return this.usuariosService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const user = await this.usuariosService.findOne(id)
        if (!user) throw new NotFoundException("Este usuario no existe")
        return user
    }

    @Post()
    async create(@Body() usuarioDto: CreateUsuarioDto) {
        try {
            return await this.usuariosService.create(usuarioDto)
        } catch (error) {
            if (error.code == 11000) {
                throw new ConflictException("El usuario ya existe")
            }
            throw error
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
        const user = await this.usuariosService.update(id, updateUsuarioDto)
        if (!user) throw new NotFoundException("Este usuario no existe")
        return user
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const user = await this.usuariosService.delete(id)
        if (!user) throw new NotFoundException("No existe el usuario");
        return user
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() credenciales: { usernameOrEmail: string; password: string }) {

        const { usernameOrEmail, password } = credenciales;
        const user = await this.usuariosService.findEmailOrUsername(usernameOrEmail, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        const token = this.jwtService.sign({ email: user.email, username: user.username });
        return { token };
    }
}

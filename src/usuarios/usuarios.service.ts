import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from 'src/dto/create-usuario-dto';
import { UpdateUsuarioDto } from 'src/dto/update-usuario-dto';
import { Usuario, UsuarioDocument } from 'src/schemas/usuario.schema';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel(Usuario.name) private usuario: Model<UsuarioDocument>) { }

    async findAll(): Promise<Usuario[]> {
        return this.usuario.find().exec();
    }

    async findOne(id: string): Promise<Usuario | null> {
        return this.usuario.findById(id).exec();
    }

    async create(createUsuario: CreateUsuarioDto): Promise<Usuario> {
        const newUser = new this.usuario(createUsuario);
        return newUser.save()
    }

    async update(id: string, user: UpdateUsuarioDto): Promise<Usuario | null> {
        return this.usuario.findByIdAndUpdate(id, user, { new: true }).exec();
    }

    async delete(id: string): Promise<Usuario | null> {
        return this.usuario.findByIdAndDelete(id).exec();
    }
}

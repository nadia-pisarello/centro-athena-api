import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTurnoDto } from 'src/dto/create-turno-dto';
import { UpdateTurnoDto } from 'src/dto/update-turno-dto';
import { Turno, TurnoDocument } from 'src/schemas/turno.schema';
@Injectable()
export class TurnosService {
    constructor(@InjectModel(Turno.name) private turnoModel: Model<TurnoDocument>) { }

    async findAll(): Promise<Turno[]> {
        return this.turnoModel.find().exec();
    }

    async findOne(id: string): Promise<Turno | null> {
        return this.turnoModel.findById(id).exec();

    }

    async create(createTurnoDto: CreateTurnoDto): Promise<Turno> {
        const newTurno = new this.turnoModel(createTurnoDto);
        return newTurno.save();
    }

    async update(id: string, turno: UpdateTurnoDto): Promise<Turno | null> {
        return this.turnoModel.findByIdAndUpdate(id, turno, { new: true }).exec();
    }

    async delete(id: string) {
        return this.turnoModel.findByIdAndDelete(id).exec();
    }

    async findByDate(fecha: string) {
        return this.turnoModel.find({ fecha: { $eq: fecha } }).exec();
    }

    async findByDateTime(fecha: string, hora: string): Promise<Turno[]> {
        return this.turnoModel.find({ fecha, hora }).exec();
    }

}

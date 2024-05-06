import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Model } from "mongoose";

export type TurnoDocument = HydratedDocument<Turno>;

@Schema()
export class Turno {
    @Prop({ required: true, trim: true })
    nombre_paciente: string;

    @Prop()
    telefono: string;
    @Prop({ required: true })
    fecha: string;

    @Prop({ required: true })
    hora: string;

    @Prop()
    servicio: string;

    @Prop()
    monto: number;

    @Prop()
    abonado: number

}

export const TurnoSchema = SchemaFactory.createForClass(Turno);

TurnoSchema.pre('save', async function (next) {
    const turno = this;
    const TurnoModel = this.constructor as Model<TurnoDocument>;
    const existeTurno = await TurnoModel.findOne({ fecha: turno.fecha, hora: turno.hora });
    if (existeTurno) {
        const error = new Error('Ya existe un turno para esta fecha y hora.');
        return next(error);
    }
    next();
});

export const TurnoModel = mongoose.model<TurnoDocument>('Turno', TurnoSchema);
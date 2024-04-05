import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TurnoDocument = HydratedDocument<Turno>;

@Schema()
export class Turno {
    @Prop({ required: true, trim: true })
    nombre_paciente: string;

    @Prop()
    telefono: string;

    // @Prop({ type: Date, pattern: "dd-MM-yyyyy", required: true })
    @Prop({ required: true })
    fecha: string;

    @Prop({ required: true })
    hora: string;

    @Prop()
    servicio: string;

}

export const TurnoSchema = SchemaFactory.createForClass(Turno);
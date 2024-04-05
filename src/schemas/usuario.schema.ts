import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
    @Prop({ required: true, unique: true, trim: true })
    email: string;

    @Prop({ required: true, trim: true })
    password: string;

    @Prop({ unique: true, trim: true })
    username: string;

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
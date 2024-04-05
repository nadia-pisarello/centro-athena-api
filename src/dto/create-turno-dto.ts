import { Type } from "class-transformer";
import { IsString, IsDate, IsNotEmpty } from "class-validator";
export class CreateTurnoDto {

    @IsString()
    @IsNotEmpty()
    nombre_paciente: string;

    @IsString()
    @IsNotEmpty()
    telefono?: string;

    // @Type(() => Date)
    // @IsDate()
    @IsString()
    @IsNotEmpty()
    fecha: string;

    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsString()
    @IsNotEmpty()
    servicio?: string;
}
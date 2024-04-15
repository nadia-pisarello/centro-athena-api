import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
export class CreateTurnoDto {

    @IsString()
    @IsNotEmpty()
    nombre_paciente: string;

    @IsString()
    @IsNotEmpty()
    telefono?: string;

    @IsString()
    @IsNotEmpty()
    fecha: string;

    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsString()
    @IsNotEmpty()
    servicio: string;

    @IsNumber()
    @IsOptional()
    monto: number;

    @IsNumber()
    @IsOptional()
    abonado: number;
}
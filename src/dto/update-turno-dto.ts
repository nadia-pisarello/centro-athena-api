import { IsString, IsOptional, IsNumber } from "class-validator";

export class UpdateTurnoDto {

    @IsOptional()
    @IsString()
    nombre_paciente?: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsString()
    @IsOptional()
    fecha?: string;

    @IsOptional()
    @IsString()
    hora?: String;

    @IsOptional()
    @IsString()
    servicio?: string;

    @IsOptional()
    @IsNumber()
    monto?: number;

    @IsOptional()
    @IsNumber()
    abonado?: number;
}
import { IsString, IsOptional } from "class-validator";

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
    @IsString()
    monto?: number;

    @IsOptional()
    @IsString()
    abonado?: number;
}
import { IsString, IsNotEmpty } from "class-validator";
export class UpdateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    username: string;
}
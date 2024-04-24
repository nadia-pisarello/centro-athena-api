import { IsString, IsNotEmpty } from "class-validator";
export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    username: string;
}
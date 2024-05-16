import { IsBoolean, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsBoolean()
    active: boolean;

    @IsString()
    typeUser: string;

    @IsEmail()
    email: string;

    @IsString()
    cellPhone: string;

    @IsString()
    cpf: string;

    @IsString()
    password: string;
}
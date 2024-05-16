import { UserEntity } from "../entities/user.entity";

export class ReturnUserDTO {

    id: number;
    active: boolean;
    typeUser: string;
    name: string;
    lastName: string;
    email: string;
    cellPhone: string;
    cpf: string;

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.active = userEntity.active;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.cellPhone = userEntity.cellPhone;
        this.cpf = userEntity.cpf;
    }

}
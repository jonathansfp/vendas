import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}
    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {

        const saltOrRounds = 10;
        const passwordhashed = await hash(createUserDto.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDto,
            password: passwordhashed,
        });

    }

    async getAllUser(): Promise<UserEntity[]>{
        return this.userRepository.find();

    }
}

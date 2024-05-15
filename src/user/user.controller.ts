import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from  './dtos/createUser.dto'
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDTO } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }
    @UsePipes(ValidationPipe)
    @Post()
    async CreateUser(@Body() createUser: CreateUserDto): Promise<UserEntity>
    {
        return this.userService.createUser(createUser);
    }
    @Get()
    async getAllUser(): Promise<ReturnUserDTO[]> {
        return (await this.userService.getAllUser()).map(
            (userEntity) => new ReturnUserDTO(userEntity)) ;
    }
}

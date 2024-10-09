import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {User} from './models/user.model';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }

    @Post() 
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll()
    }
}

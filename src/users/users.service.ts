import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';

export type ExistingUser = any;


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userModel: typeof User) { }

    create(createUserDto: CreateUserDto): Promise<User> {
        return this.userModel.create({
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
            phoneNumber: createUserDto.phoneNumber,
            email: createUserDto.email
        });
    }

    async findAll(): Promise<User[]> {
        const users = await this.userModel.findAll()
        // console.log(`users:::`,  users)
        return users;
    }

    private readonly usersList = [
        {
            "id": 1,
            "firstName": "Manoj",
            "lastName": "Kumar",
            "phoneNumber": "+919550065965",
            "email": "manoj.kodavati@logikal.ai",
            "password": "manoj123",
            "isActive": true,
            "createdAt": "2024-10-09T07:33:39.000Z",
            "updatedAt": "2024-10-09T07:33:39.000Z"
        },
        {
            "id": 2,
            "firstName": "Virat",
            "lastName": "Kohli",
            "phoneNumber": "+919550065900",
            "email": "virat.kohli@logikal.ai",
            "password": "virat123",
            "isActive": true,
            "createdAt": "2024-10-09T07:41:41.000Z",
            "updatedAt": "2024-10-09T07:41:41.000Z"
        }
    ]

    async findOne(firstName: string): Promise<ExistingUser | undefined> {
        return this.usersList.find(user => user.firstName === firstName);
    }
}

import { Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    phoneNumber: string;

    @Column
    email: string;

    @Column({defaultValue: true})
    isActive: boolean;
}
 import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
     email: string;
     
    @Column({default: true })
    isActive: boolean;
}

import {
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    _id: string;

    @Column({
        length: 255,
        unique: true,
        nullable: false,
        comment: "User's email",
    })
    username: string;

    @Column({ length: 16, nullable: false, comment: "User's password" })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

import { Request, Response } from "express";
import { status } from "http-status";
import { DataBase } from "@model/dataBase"; { }
import { Repository } from "typeorm";

export class userController {

    private readonly dataBase: DataBase;

    constructor() {
        this.dataBase = new DataBase();
        this.dataBase.connect();
        this.dataBase.getDataSource();
    }

    // TODO: buildService debe ser del tipo userService
    buildService() {
        const userRepository: Repository<User> = dataSource.getRepository(User);
    }

    public static async logInUser(req: Request, res: Response): Promise<void> {
        res.send("Hello World").status(status.OK);
    }
}
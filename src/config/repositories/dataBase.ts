import { DataSource } from "typeorm";

export class DataBase {
    private appDataSource: DataSource;

    constructor() {
        this.appDataSource = new DataSource({});
    }
}
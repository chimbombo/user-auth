import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "@config/index";

export class DataBase {
    private appDataSource: DataSource;

    constructor() {
        this.appDataSource = new DataSource(config.database as DataSourceOptions);
    }

    async connect() {
        try {
            if (!this.appDataSource.isInitialized) {
                await this.appDataSource.initialize();
                console.log("Database connection established.");
            }
        } catch (error) {
            console.error("Error connecting to database:", error);
        }
    }

    getDataSource(): DataSource {
        return this.appDataSource;
    }
}

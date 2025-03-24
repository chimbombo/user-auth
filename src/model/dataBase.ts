import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "@config/index";


class Database {
    private static instance: DataSource;

    public static getInstance(): DataSource {
        if (!this.instance) {
            this.instance = new DataSource(config.database as DataSourceOptions);
        }
        return this.instance;
    }

    public static async initialize(): Promise<void> {
        try {
            await this.getInstance().initialize();
            console.log("Database connected successfully");
        } catch (error) {
            console.error("Error during Data Source initialization", error);
            throw new Error("Database connection failed");
        }
    }
}

export default Database.getInstance();

import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "@config/index";

// export class Database {
//     private static instance: DataSource = new DataSource(config.database as DataSourceOptions);

//     // constructor() {
//     //     this.instance = new DataSource(config.database as DataSourceOptions);
//     // }

//     static async connect() {
//         try {
//             if (!Database.instance.isInitialized) {
//                 await this.instance.initialize();
//                 console.log("Database connection established.");
//             }
//         } catch (error) {
//             console.error("Error connecting to database:", error);
//         }
//     }

//     getInstance(): DataSource {
//         return Database.instance;
//     }
// }

class Database {
    private static instance: DataSource;

    public static getInstance(): DataSource {
        if (!this.instance) {
            this.instance = new DataSource(config.database as DataSourceOptions);
        }
        return this.instance;
    }
}

export default Database.getInstance();

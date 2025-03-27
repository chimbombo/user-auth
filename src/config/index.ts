import dotenv from "dotenv";
import { User } from "@entities/User";
dotenv.config();

export const config = {
    server: {
        port: Number(process.env.PORT) || 3000,
    },
    database: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        type: "postgres",
        logging: false,
        schema: process.env.DB_SCHEMA,
        entities: [User],
        port: Number(process.env.DB_PORT),
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
    },
    bcrypt: {
        saltRounds: Number(process.env.SALT_ROUNDS) || 10,
    }
};

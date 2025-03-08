import dotenv from "dotenv";
dotenv.config();

export const config = {
    server: {
        port: Number(process.env.PORT) || 3000,
    },
    database: {
        host: process.env.HOST,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        type: "postgres",
        logging: false,
        schema: process.env.SCHEMA,
        entities: ["src/entities/*.ts"],
        port: Number(process.env.DB_PORT),
        synchronize: true,
    },
};

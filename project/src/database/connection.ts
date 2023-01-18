import {DatabaseType, DataSource} from "typeorm"
import dotenv from 'dotenv'
import "reflect-metadata"
dotenv.config();

const DB_PORT:number = parseInt(process.env.DB_PORT|| '1433');
const type:DatabaseType = "mssql";

const AppDataSource = new DataSource({
    type: type,
    host: process.env.DB_SERVER,
    port: DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        `${__dirname}/***/*.entity.ts`
    ],
    subscribers: [],
    migrations: [],
    extra: {
        trustServerCertificate: true,
      }
});

AppDataSource.initialize()
                .then(():void=> console.log("DataSource initialized"))
                //.catch(():void=> console.log("DataSource ERROR"))

export default AppDataSource;

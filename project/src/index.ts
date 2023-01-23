import express from 'express';
import '@/database/connection';
import ProductController from '@/controller/Product.controller';
import bodyParser, { BodyParser } from 'body-parser';
import cors from 'cors';

const PORT =  parseInt(process.env.PORT|| '8080');
const INDEX_PATH: string =  process.env.INDEX_PATH || '';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(PORT,():void=>{
    console.log(`Server running in :${PORT}`)
});


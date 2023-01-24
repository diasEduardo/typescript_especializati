import express from 'express';
import bodyParser, { BodyParser } from 'body-parser';
import cors from 'cors';
import apiRoute from '@/route/apiRoute';

const PORT =  parseInt(process.env.PORT|| '8080');
const INDEX_PATH: string =  process.env.INDEX_PATH || '';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',apiRoute);
app.use('/api/v1',apiRoute);
app.listen(PORT,():void=>{
    console.log(`Server running in :${PORT}`)
});


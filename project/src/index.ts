import express from 'express'
import './database/connection'

const PORT =  parseInt(process.env.PORT|| '8080');
const INDEX_PATH: string =  process.env.INDEX_PATH || '';

const app = express();
app.listen(PORT,():void=>{
    console.log(`Server running in :${PORT}`)
});
app.get(INDEX_PATH,():void=>{
    console.log(`index running at "${INDEX_PATH}"`)
})

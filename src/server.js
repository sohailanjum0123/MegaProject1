import dotenv from 'dotenv';
import connectdb  from './db/database.js';
import { app } from './app.js';


dotenv.config({
    path:"./env"
})

connectdb();

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server is Running on Port: http://localhost${PORT}`);
})


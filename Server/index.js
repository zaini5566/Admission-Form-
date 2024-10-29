import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import route from "./Routes/stroutter.js";
import dotenv from 'dotenv';
dotenv.config();


const app = express()
 app.use(bodyParser.json());
 app.use(cors());

const port = process.env.PORT || 4000;
const dbUri = process.env.DB_URI;

mongoose.connect(dbUri).then(()=>{
    console.log("DB Connect Successfully")
}).catch((error) => {
    console.log(error)
})


app.listen(port, () => {
console.log(`Student app listied on port ${port}`)
})


app.use("/api", route); 

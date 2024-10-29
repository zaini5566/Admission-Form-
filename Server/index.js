import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import route from "./Routes/stroutter.js";



const app = express()
 app.use(bodyParser.json());
 app.use(cors());

const port =  4000;


mongoose.connect("mongodb+srv://zain:zain5566g@crudapp.th5st.mongodb.net/CrudApp?retryWrites=true&w=majority&appName=CrudApp").then(()=>{
    console.log("DB Connect Successfully")
}).catch((error) => {
    console.log(error)
})


app.listen(port, () => {
console.log(`Student app listied on port ${port}`)
})


app.use("/api", route); 

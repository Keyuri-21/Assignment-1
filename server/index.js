import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes/Student.js";
import parentRoute from "./routes/Parent.js";
import loginRoute from "./routes/Login.js";


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static("public"));
app.use("/api", route);
app.use("/api", parentRoute);
app.use("/api", loginRoute);


const PORT =  7000;
// const URL = process.env.MONGOURL;

//connection of the database
mongoose.connect("mongodb://localhost:27017/studentms").then(()=>{
    console.log("Db connected successfully..");

    app.listen(PORT, ()=>{
        console.log(`Server is listening at ${PORT}`);

    });

}).catch(error => console.log(error));




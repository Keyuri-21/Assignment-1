import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/studentRoute.js";
import parentRoute from "./routes/parentRoute.js";
import SignupModel from "./model/signupModel.js"
import AdminModel from "./model/adminModel.js";


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static("public"));

const PORT =  7000;
// const URL = process.env.MONGOURL;

mongoose.connect("mongodb://127.0.0.1:27017/studentms").then(()=>{
    console.log("Db connected successfully..");

    app.listen(PORT, ()=>{
        console.log(`Server is listening at ${PORT}`);

    });

}).catch(error => console.log(error));

app.post('/login', (req, res) =>{
    const {email, password} = req.body;
    SignupModel.findOne({email: email})
    .then(signup => {
        if(signup){
            if(signup.password === password){
                res.json("Success")
            }else{
                res.json("password incorrect")
            }
        }else{
            res.json("email is not registered")
        }
    })
})

app.post('/admin/login', (req, res) =>{
    const {email, password} = req.body;

    console.log(email ,password)
    AdminModel.findOne({email: email})

    
    .then(admin => {
        if(admin){
            if(admin.password === password){
                res.json("Success")
            }else{
                res.json("password incorrect")
            }
        }else{
            res.json("email is not registered")
        }
    })
})



app.use('/signup', (req, res) =>{
    const {name, email, password, confirm} = req.body;
    SignupModel.findOne({email: email})
    .then(user => {
        if(user){
            res,json("Already have account")
        }else{
            SignupModel.create({name: name, email: email, password: password, confirm: confirm})
            .then(result => res.json("Account created"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))

})

app.use("/api", route);
app.use("/api", parentRoute);

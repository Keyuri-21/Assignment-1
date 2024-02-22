import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/studentRoute.js";
import SignupModel from "./model/signupModel.js"

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("Db connected successfully..");

    app.listen(PORT, ()=>{
        console.log(`Server is listening at ${PORT}`);

    });

}).catch(error => console.log(error));

app.post('/Login', (req, res) =>{
    const {email, password} = req.body;
    SignupModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
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

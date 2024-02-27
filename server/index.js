import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes/StudentRoute.js";
import SignupModel from "./model/SignupModel.js"
import AdminModel from "./model/AdminModel.js";
import Student from "./model/StudentModel.js";
import ParentRoute from "./routes/parentRoute.js";


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static("public"));
const PORT =  7000;
// const URL = process.env.MONGOURL;

//connection of the database
mongoose.connect("mongodb://127.0.0.1:27017/studentms").then(()=>{
    console.log("Db connected successfully..");

    app.listen(PORT, ()=>{
        console.log(`Server is listening at ${PORT}`);

    });

}).catch(error => console.log(error));



//api for the fetching of the student details
app.get('/getByEmail', async (req, res) => {
  const { email } = req.query;
  const student = await Student.findOne({ email });

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student not found' });
  }
});


//api for the login of user
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    SignupModel.findOne({ email: email })
      .then((signup) => {
        if (signup) {
          if (signup.password === password) {  
            res.json('Success');
          } else {
            res.json('Password incorrect');
          }
        } else {
          res.json('Email is not registered');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

  //api for the login of admin
app.post('/admin/login', (req, res) =>{
    const {email, password} = req.body;
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


// api for the signup of the user
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
app.use("/api", ParentRoute);

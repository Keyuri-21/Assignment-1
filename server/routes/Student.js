import express from "express";
import multer from "multer";
import path from "path"; 
import { create, search } from "../controller/Student.js"; 
import { getAll } from "../controller/Student.js";
import { getOne } from "../controller/Student.js";
import { update } from "../controller/Student.js";
import { deleteStudent } from "../controller/Student.js";
import { profilePic } from "../controller/Student.js";
import isAdmin from "../middleware/Auth.js";

const route = express.Router();
const app =express()

//for accessing the images 
app.use(express.static("public"));

let imageName = "";

//storing the file 
const storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
    cb(null, './public');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname));   
  } ,
  
});

//upload the file stored
const upload = multer({ storage: storage })


// all the routes for the apis of the student
route.get('/getprofilePic', isAdmin, profilePic, ); 
route.post("/create",upload.single("profilePic") , isAdmin, create);
route.get("/getAll", isAdmin, getAll);
route.get("/getOne/:id", isAdmin, getOne);
route.put("/update/:id",upload.single("profilePic") ,isAdmin,  update);
route.delete("/delete/:id", isAdmin, deleteStudent);
route.get("/search/:email",  isAdmin, search);

export default route;
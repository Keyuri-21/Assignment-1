import express from "express";
import { create, search } from "../controller/studentController.js"; 
import { getAll } from "../controller/studentController.js";
import { getOne } from "../controller/studentController.js";
import { update } from "../controller/studentController.js";
import { deleteStudent } from "../controller/studentController.js";
import multer from "multer";
import path from "path"; 
import { profilePic } from "../controller/studentController.js";
const route = express.Router();
const app =express()

app.use(express.static("public"));

let imageName = "";

const storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
    cb(null, './public');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname));   
  } ,
  
});


const upload = multer({ storage: storage })

route.get('/getprofilePic', profilePic); 
route.post("/create",upload.single("profilePic") , create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id",upload.single("profilePic") , update);
route.delete("/delete/:id", deleteStudent);
route.get("/search/:email",  search);

export default route;
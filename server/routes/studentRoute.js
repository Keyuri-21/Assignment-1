import express from "express";
import { create } from "../controller/studentController.js"; 
import { getAll } from "../controller/studentController.js";
import { getOne } from "../controller/studentController.js";
import { update } from "../controller/studentController.js";
import { deleteStudent } from "../controller/studentController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteStudent);

export default route;
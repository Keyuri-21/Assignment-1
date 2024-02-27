import express from 'express';
import { createParent, searchParent } from "../controller/ParentController.js"; 
import { getAllParent } from "../controller/ParentController.js";
import { getOneParent } from "../controller/ParentController.js";
import { updateParent } from "../controller/ParentController.js";
import { deleteParent } from "../controller/ParentController.js";
const ParentRoute = express.Router();

//giving the rooute to all the apis for the parent
ParentRoute.post("/createParent", createParent);
ParentRoute.get("/getAllParent", getAllParent);
ParentRoute.get("/getOneParent/:id", getOneParent);
ParentRoute.put("/updateParent/:id", updateParent);
ParentRoute.delete("/deleteParent/:id", deleteParent);
ParentRoute.get("/searchParent/:fname",  searchParent);

export default ParentRoute;
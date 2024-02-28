import express from 'express';
import { createParent, searchParent } from "../controller/Parent.js"; 
import { getAllParent } from "../controller/Parent.js";
import { getOneParent } from "../controller/Parent.js";
import { updateParent } from "../controller/Parent.js";
import { deleteParent } from "../controller/Parent.js";
import isAdmin from '../controller/Auth.js';


const parentRoute = express.Router();

//giving the rooute to all the apis for the parent
parentRoute.post("/createParent", isAdmin, createParent);
parentRoute.get("/getAllParent", isAdmin, getAllParent);
parentRoute.get("/getOneParent/:id", isAdmin, getOneParent);
parentRoute.put("/updateParent/:id", isAdmin, updateParent);
parentRoute.delete("/deleteParent/:id", isAdmin, deleteParent);
parentRoute.get("/searchParent/:fname", isAdmin, searchParent);

export default parentRoute;
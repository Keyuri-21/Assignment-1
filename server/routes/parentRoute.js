import express from "express";
import { createParent, searchParent } from "../controller/parentController.js"; 
import { getAllParent } from "../controller/parentController.js";
import { getOneParent } from "../controller/parentController.js";
import { updateParent } from "../controller/parentController.js";
import { deleteParent } from "../controller/parentController.js";
const parentRoute = express.Router();
const app =express()

parentRoute.post("/createParent", createParent);
parentRoute.get("/getAllParent", getAllParent);
parentRoute.get("/getOneParent/:id", getOneParent);
parentRoute.put("/updateParent/:id", updateParent);
parentRoute.delete("/deleteParent/:id", deleteParent);
parentRoute.get("/searchParent/:fname",  searchParent);

export default parentRoute;
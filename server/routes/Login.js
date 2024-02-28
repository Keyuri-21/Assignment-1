import express from "express";
import { adminLogin, login, signup } from "../controller/Login.js";

const loginRoute = express.Router();
loginRoute.post('/signup', signup);
loginRoute.post('/login', login);
loginRoute.post('/adminlogin', adminLogin);

export default loginRoute;
import session from "express-session";
import express from "express";

const app = express();
app.use(session({
    secret:"1234567",
    resave: true,
    saveUninitialized: false,
}));

// middleware to check admin authentication
const isAdmin = (req, res, next) => {
    if(req.session && req.session.isAdmin){
        next();
    } else{
        res.status(403).send('unauthorized');
    }
}

export default isAdmin;
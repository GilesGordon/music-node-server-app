import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import TokenRoutes from "./Tokens/routes.js";
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import queryString from 'query-string';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING //'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors({   credentials: true,
    origin: process.env.FRONTEND_URL,
    allowedHeaders: ['Content-Type', 'Authorization']}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    };
    if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        // domain: process.env.HTTP_SERVER_DOMAIN,
    };
    }
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
TokenRoutes(app);

app.listen(4000)

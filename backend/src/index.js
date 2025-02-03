import dotenv from "dotenv"
import db from './database/db.js';
import {app} from './app.js'
// dotenv.config({
//     path: './.env'
// })
// import express from 'express';
// import cors from 'cors';

// const app = express();

dotenv.config();

// console.log(`${process.env.DB_NAME}`);
// app.use(cors({
//     origin: 'http://localhost:5173'
//   }));
  
console.log("Environment Variables:", {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
});
console.log(process.env);
db()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(" mongodb connection failed !!! ", err);
})
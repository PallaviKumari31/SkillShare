import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay"
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// const keyId = process.env.KEY_ID || 'default_key_id';
// const keySecret = process.env.KEY_SECRET || 'default_key_secret';

// console.log('Razorpay Key ID:', keyId);
// console.log('Razorpay Key Secret:', keySecret);


// console.log("Environment Variables Test:");
// console.log("MONGODB_URI:", process.env.MONGODB_URI);
// console.log("PORT:", process.env.PORT);
// console.log("DB_NAME:", process.env.DB_NAME);

  

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
})

//student routes
import studentRouter from "./routes/student.routes.js";
app.use("/api/student", studentRouter)


//teacher routes
import teacherRouter from "./routes/teacher.routes.js"
app.use("/api/teacher", teacherRouter)

//course routes
import courseRouter from "./routes/course.routes.js"
app.use("/api/course", courseRouter)

import adminRouter from "./routes/admin.routes.js"
app.use("/api/admin", adminRouter)

import paymentRouter from "./routes/payment.routes.js"
app.use("/api/payment", paymentRouter)


export {app}
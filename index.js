import express from "express";
import mongoose from "mongoose";
import studentRouter from "./router/studentRouter.js";
import bodyParser from "body-parser";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";

import jwt from "jsonwebtoken";

const app = express();
app.use(bodyParser.json());

// Athuorization Start
 app.use((req,res,next)=>{
     const value = req.header("Authorization")
     if(value){
         const token = value.replace("Bearer ", "")
         jwt.verify(token, "abs 6503", 
             (err, decode)=>{
                 if(decode == null){
                     res.status(403).json({
                         message : "Unotherized"
                     })
                 }else{
                     req.user = decode
                     next();
                 }
             }
     )
     }else{
        next();
     }
 })
// Athuorization end



// connection stared
const connection = "mongodb+srv://nuwanchathuska14:admin123@cluster0.eabpsct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connection).then(
    ()=>{
        console.log("Database Connected " );
    }
).catch(
    ()=>{
        console.log("not connected");
    }
)
// connection end


// App Link Start

app.use("/student" , studentRouter)
app.use("/user" , userRouter)
app.use("/products" , productRouter)

// App link end


// Postman link start
app.listen(5000, ()=>{
    console.log("Sever Started");
 })
//  Postman link end
import express from "express";
import { criateUser, logisUser } from "../Controller/userController.js";


const userRouter = express.Router();

userRouter.post("/",criateUser);
userRouter.post("/login",logisUser);

export default userRouter
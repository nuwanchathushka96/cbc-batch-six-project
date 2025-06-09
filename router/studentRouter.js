import express from "express";
import { postStudent } from "../Controller/studentController.js";


const studentRouter = express.Router();

studentRouter.post("/" , postStudent);

export default studentRouter
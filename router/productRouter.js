import express from "express"
import { createProduct, getProduct } from "../Controller/productController.js";


const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProduct)

export default productRouter; 
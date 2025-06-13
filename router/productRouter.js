import express from "express"
import { createProduct, getInformation, getProduct, productDelete, productUpdate } from "../Controller/productController.js";


const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProduct)
productRouter.delete("/:productId", productDelete)
productRouter.get("/:productId" , getInformation)
productRouter.put("/:productId", productUpdate)

export default productRouter; 
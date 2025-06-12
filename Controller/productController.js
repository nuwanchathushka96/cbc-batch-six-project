import product from "../models/product.js";
import Product from "../models/product.js";
import { isAdmin } from "./userController.js";



export async function createProduct(req , res){


    if(!isAdmin(req)){
        res.status(403).json({
            message : "Plase Loging create the prodcut"
        })
        return;
        }


    const product = new Product (req.body)

    try{
        const respone = await product.save()

        res.json({
            message : "Product Created Successfully",
            product : respone

        })
        
    }catch(error){

        
            return res.status(580).json({
                message : "Faild the product Create"
            })
            
        

    }
    
}

// prodcut find function

export async function getProduct(req , res){

    try{
    if(isAdmin(req)){
        const products = await Product.find();
        return res.json(products);
    }else{
        const prodcuts = await Product.find({isAvailable  : true});
        return res.json(prodcuts);
    }
} catch (error){
    console.error(error);
    return res.json(error);
}

}
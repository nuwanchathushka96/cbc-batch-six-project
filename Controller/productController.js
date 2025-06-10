import Product from "../models/product.js";



export async function createProduct(req , res){

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
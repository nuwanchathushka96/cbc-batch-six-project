import product from "../models/product.js";
import Product from "../models/product.js";
import { isAdmin } from "./userController.js";


// create product funation start

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
// create product funation end

// prodcut find function start

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
// prodcut find function end

// product delete function start

export async function productDelete(req , res){
    
    if(!isAdmin(req)){
        res.status(403).json({
            message : "product delete can admin only"
        })
        return;
    }

    try{
         const productId = req.params.productId;
         await product.deleteOne({productId : productId});
        res.json({
            message : "product Deleted Successfully"
        })
    }catch(error){
        return res.status(580).json({
                message : "Faild the product Create"
            })
    }
   
}

// product delete function end


// product Upadate function start

export async function productUpdate(req , res){ 
    
    if(!isAdmin(req)){
        res.status(403).json({
            message : "product delete can admin only"
        })
        return;
    }
    
    const data = req.body;
    const productId = req.params.productId;
    data.productId = productId;

    try{
        await product.updateOne({productId : productId}, data);
        res.json({
            message : "update successfully"
        })

    }catch(error){

         return res.status(580).json({
                message : "Faild the product Create"
            })

    }

}

// product Upadate function end

// get one product function start

export async function getInformation(req,res){

    try{

    const productId = req.params.productId;
    const products = await product.findOne({productId : productId})

    if(products == null){
        res.json({
            message : "Product is not found"
            
        })
        return;
    }

    if(isAdmin(req)){   

        res.json(products);

    }else{
        if(product.isAvailable){
            res.json(products);
        }else{
            res.status(404).json({
            message : "Product is not found"
            })
        return;
        }
    }
}catch(error){
    return res.status(404).json({
        
                message : "Faild the product search"
                
                
            }),
            console.error("fgdfg ",error);
}

}



// get one product function end
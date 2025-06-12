import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        require : true
    },
    altNames : {
        type : [String],
        default : []
    },
    labellPrice : {
            type : Number,
            require : true

    },
    price : {
        type : String,
        require : true
    },
    image : {
        type : [String],
        default : ["/ default.produc.jpg"]
    },
    description : {
        type : String,
        require :true
    },
    stock : {
        type :Number,
        require :true,
        default : 0
    },
    isAvailable : {
        type : Boolean,
        require : true
    },
    categary : {
        type : String,
        default : "Cosmatiecs"
    }
})

const product = mongoose.model("products" , productSchema);
 export default product;
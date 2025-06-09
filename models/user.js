import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    fristName:{
        type :String,
        required : true
    },
    lastName : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        default : "Not Given"
    },
    isBloked : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        default : "user"
    },
    isEmailVerified : {
        type : String,
        default : false

    },
    image : {
        type : String,
        default : "https://images.app.ghttps://images.app.goo.gl/Vjpb3ngpKNu43pkWAoo.gl/N8jkgugGoqcnfWKaA"
    }

})

const User = new mongoose.model("user", userSchema);

export default User;
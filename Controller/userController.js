import User from "../models/user.js";
import bcrypt from "bcrypt" ; 
import jwt from  "jsonwebtoken";

export function criateUser(req , res){

    const hasingPassword = bcrypt.hashSync(req.body.password , 10);
    const userData ={
         
        fristName : req.body.fristName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hasingPassword,


    }

    const user = new User(userData);
    user.save().then(()=>{
        console.log("User saved")
    }).catch(()=>{
        console.log("not Save")
    })

}

export function logisUser(req , res){

    const email = req.body.email
    const password = req.body.password


    User.findOne({
        email : email
    }).then((User)=>{
        if(User == null){
            res.status(401).json({
                massage : "user not found"
            })
        }else { 
            
            const isPassword = bcrypt.compareSync(password, User.password)
            if(isPassword){

                const token = jwt.sign({
                    email : User.email,
                    fristName : User.fristName,
                    lastName : User.lastName,
                    isBloked : User.isBloked,
                    role : User.role,
                    isEmailVerified : User.isEmailVerified,
                    image : User.image
                },"abs 6503"
            )

                res.json({
                    token : token ,
                    massage : "login Succsessfull"
                })
            } else {
                res.status(403).json({
                    massage : "user not found"
                })
            }
        }
    })
}
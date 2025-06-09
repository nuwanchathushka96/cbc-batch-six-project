import Student from "../models/student.js";


export function postStudent(req , res){

    if(req.user == null){
        res.status(403).json({
            message : "Place Login to create student"
            
        })
        return;
    }
    if(req.user.role != "admin"){
         res.status(403).json({
            message : "Place Login in an admin"
            
        })
        return;
    }



    const student = new Student(req.body)
    student.save().then(()=>{
        console.log("save");
    }).catch(()=>{
    console.log("Not save")
})
    
}


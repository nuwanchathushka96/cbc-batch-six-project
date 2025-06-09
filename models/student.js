import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    name :String,
    age : Number

})

const Student = new mongoose.model("student", studentSchema)

export default Student;
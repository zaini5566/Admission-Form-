import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type: String, 
        required: true
    },
    lname:{
        type: String, 
        required: true
    },
    fathername:{
        type: String, 
        required: true
    },
    phone:{
        type: Number, 
        required: true,
        trim:true
    },
    dateofbirth:{
        type: String, 
        required: true
    },
    gender:{
        type: String, 
        required: true
    },
    class:{
        type: String, 
        required: true
    },
    Monthlyfee:{
        type: String, 
        required: true
    },
    Address:{
        type: String, 
        required: true
    }
})

export default mongoose.model("Student", userSchema)
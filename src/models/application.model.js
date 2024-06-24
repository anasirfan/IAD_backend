import mongoose , {Schema} from "mongoose";


const applicationSchema = new Schema(
    {
    candidateName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true
    },


    candidateEmail:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },

    position: {
        type: String,
    },

    education: {
        type: String,
    },

    experience: {
        type: String,
    },

    type: {
        type: String,
    },

    userId: {
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})


export const Application = mongoose.model("Application",applicationSchema);
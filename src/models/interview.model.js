import mongoose , {Schema} from "mongoose";


const interviewSchema = new Schema(
    {
    interviewTime: {
        type: String,
    },
    interviewDate: {
        type: String,
    },
    candidateName: {
        type: String,
    },
    position: {
        type: String,
    },

    userId: {
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})


export const Interview = mongoose.model("Interview",interviewSchema);
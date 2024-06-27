import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {Application} from "../models/application.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Interview } from "../models/interview.model.js"


const scheduleInterview = asyncHandler(async(req,res)=>{

    const {userId , candidateName , position , interviewTime ,interviewDate} = req.body;

    if([candidateName,position,interviewTime,interviewDate].some(
        (field) => field?.toString().trim() == ""
    )){
        throw new ApiError(400, is`${field} is required`);
    }


    const scheduledInterview = await Interview.create({
        candidateName,
        position,
        interviewTime,
        interviewDate,
        userId
    })

    res.status(201).json(
        new ApiResponse(200,scheduledInterview,"interview scheduled successfully")
    );
})

const getAllInterview = asyncHandler(async(req,res)=>{
    const list = await Interview.find();
    res.status(200).json(
        new ApiResponse(200,list,"interview list:")
    );
})

const deleteInterview = asyncHandler(async(req,res)=>{

    const response = await Interview.findOneAndDelete(req.body);

    if(!response){
      throw new ApiError(400, "no user exists by this id");
    }
  
    console.log("Interview successfully deleted",response);
    res.status(200).json(
      new ApiResponse(200,response,"Interview deleted:")
  );
})

const getInterviewById = asyncHandler(async(req,res)=>{
    const response = await Application.findOne(body.req)

    if(!response){
        throw new ApiError(400, "no user exists by this id");
    }
    res.status(200).json(
      new ApiResponse(200,response,"the current user is:")
  );
})

export{
    scheduleInterview,
    getAllInterview,
    deleteInterview,
    getInterviewById
}
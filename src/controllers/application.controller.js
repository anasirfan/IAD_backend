import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {Application} from "../models/application.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";



const createApplication = asyncHandler(async(req,res)=>{
    const { candidateName, candidateEmail,position, education, experience ,type, userId} = req.body;

    console.log("candidate email is : ", candidateEmail);

    if([candidateName,candidateEmail,position,education,experience,type].some(
        (field) => field?.toString().trim() == ""
    )){
        throw new ApiError(400, is`${field} is required`);
    }

    const existedUser = await User.findOne({
        $or: [{"email": candidateEmail }, {"userName":candidateName}],
      });


      console.log("existed user is ",existedUser);

      if(!existedUser){
        throw new ApiError(409, "user does not exist with email or username");
      }


    const createdApplication = await Application.create({
        candidateName,
        candidateEmail,
        position,
        education,
        experience,
        type ,
        userId
    })

    res.status(201).json(
        new ApiResponse(200,createdApplication,"application successfully created")
    );


})


const getAllAplications = asyncHandler(async(req,res)=>{
    const list = await Application.find();
    res.status(200).json(
        new ApiResponse(200,list,"application list:")
    );
})

const deleteApplication = asyncHandler(async(req,res)=>{
    const response = await Application.findOneAndDelete(req.body);

    if(!response){
      throw new ApiError(400, "no user exists by this id");
    }
  
    console.log("Application successfully deleted",response);
    res.status(200).json(
      new ApiResponse(200,response,"user deleted:")
  );
})




export{
    createApplication,
    getAllAplications,
    deleteApplication
}
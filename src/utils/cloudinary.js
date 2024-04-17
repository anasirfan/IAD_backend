import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{

    try{
        if(!localFilePath) return null;

        //upload file on cloudinary
        

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        console.log("file has been uploaded succesfully in cloudinary utilis file ",response.url);
        return response;

    }catch(e){
        //delete from the locally saved temporary file 
        console.log("it is in catch block of cloudinary js ");
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export {uploadOnCloudinary};
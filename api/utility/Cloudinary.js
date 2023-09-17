import cloudinary from "cloudinary"

import fs from "fs"
cloudinary.v2.config({ 
  cloud_name: 'ds9mljkgj', 
  api_key: '681823761534747', 
  api_secret: '_Eb_2iPZ5soB8Bg7FRsVryaW7qc' 
});

export const cloudUpload= async(req)=>{
   
    const data = await cloudinary.v2.uploader.upload(req.file.path);
 
   return data
} 
export const cloudUploads= async(path)=>{
   
    const data = await cloudinary.v2.uploader.upload(path);
 
   return data.secure_url
} 
export const cloudDelete= async(publicId)=>{
   
    const data = await cloudinary.v2.uploader.destroy(publicId);
 
   return data
} 
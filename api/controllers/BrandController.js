import { BrandModel } from "../model/BrandModel.js";
import { cloudDelete, cloudUpload } from "../utility/Cloudinary.js";
import { createSlug } from "../utility/CreateSlug.js";
import asyncHandler from "express-async-handler"
import { publicIdGenerator } from "../utility/PubulicIdGenerator.js";


//================get all product
export const GetAllBrandProducts = asyncHandler(async(req, res) => {

    const brands = await BrandModel.find();
   if(brands.length>0){
    res.status(200).json({brands,message:"all Brand data"})
   }else{
    res.status(400).json({message:"Not found data"})
   };
  
}) 

//================create product
export const createBrandProducts = asyncHandler(async (req, res, next) => {

  const { name } = req.body;

  const barndCheck = await BrandModel.findOne({name})
  if(barndCheck){
     res.status(400).json({message:"Brand Already exists"})
  }else{
    let logoImg = null
    if(req.file){
       logoImg = await cloudUpload(req)
    }
    
      const data = await BrandModel.create({
        name,
        slug: createSlug(name),
        logo:logoImg?.secure_url?logoImg?.secure_url:null,
        status: false,
      });
    
      res.status(200).json({
        brand: data,
        message: "create Brand product",
      });
    
  }

});
//================create product
export const getSingleBrandProducts = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
const data = await BrandModel.findById(id);
res.status(200).json({
  brand: data,
  message: "get Single Brand product",
});

})
//================create product
export const updateSingleBrandProducts = asyncHandler(async (req, res, next) => {

    const { id } = req.params;
    const { name } = req.body;
    const brandUpdate = await BrandModel.findById(id)
    if(!brandUpdate){
      res.status(400).json({
     
        message: "Brand data not found",
      })
    }else{
      let updatedLogo = brandUpdate.logo
      if(brandUpdate.logo){
        await cloudDelete(publicIdGenerator(updatedLogo))
      }
      if(req.file){
        const  updateUrl = await cloudUpload(req)
        updatedLogo = updateUrl.secure_url
      }
      brandUpdate.name = name;
      brandUpdate.logo = updatedLogo;
      brandUpdate.save()
      
      res.status(200).json({
        brand: brandUpdate,
        message: "Update Single Brand product",
      });
    }
   
  
})
//================delete product
export const deleteSingleBrandProducts =asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    const data = await BrandModel.findByIdAndDelete({ _id: id });
  const publicId = publicIdGenerator(data.logo)
  if(publicId){
    await cloudDelete(publicId)
  }
    res.status(200).json({
      brand: data,
      message: "Delete Single Brand product",
    });
  
})
//================status update brand product
export const statusSingleBrandProducts =asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    const { status } = req.body;
    const data = await BrandModel.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: "Status Single Brand product",
    });
  
})



import { CategoryModel } from "../model/CatagoryModel.js";
import { cloudDelete, cloudUpload } from "../utility/Cloudinary.js";
import { createSlug } from "../utility/CreateSlug.js";
import asyncHandler from "express-async-handler"
import { publicIdGenerator } from "../utility/PubulicIdGenerator.js";
//================get all product
export const GetAllCategoryProducts =asyncHandler( async (req, res, next) => {
  
    const data = await CategoryModel.find().populate([
      {
        path:"subCategory",
        populate:{
          path:"subCategory",
          populate:{
            path:"subCategory",
          }
        
      }},{path:"parentCategory", 
      path:"parentCategory",
      populate:{
        path:"parentCategory",
        populate:{
          path:"parentCategory",
          populate:{
            path:"parentCategory",
            
          }
        }
      
    }}

    ])
    res.status(200).json({
      category: data,
      message: "get All product",
    });
  
})

//================create product
export const createCategoryProducts = asyncHandler(async (req, res, next) => {

    const { name,parentCategory,icon } = req.body;
  
    const catagoryCheck = await CategoryModel.findOne({name})
  
    if(!catagoryCheck){
      res.status(400).json({
       
        message: "cartagory alraedy exists",
      });
    }

  // catagory icon 
  let catIcon = null
  if(icon){
    catIcon = icon
  }
  // catagory icon 
  let catPhoto = null
  if(req.file){
   const cata = await cloudUpload(req)
    catPhoto =cata.secure_url
  }
    const data = await CategoryModel.create({
      name,
      slug: createSlug(name),
      parentCategory,
      icon:catIcon,
      photo:catPhoto
    });
if(parentCategory){
  const parent = await CategoryModel.findByIdAndUpdate(parentCategory,{$push:{subCategory:data._id}})
}
    res.status(200).json({
      category: data,
      message: "create product",
    });
  
})
//================create product
export const getSingleCategoryProducts = asyncHandler(async (req, res, next) => {

    const { id } = req.params;
    const data = await CategoryModel.findById({ _id: id }).populate([
      {
        path:"subCategory",
        populate:{
          path:"subCategory",
          populate:{
            path:"subCategory",
          }
        
      }},{path:"parentCategory", 
      path:"parentCategory",
      populate:{
        path:"parentCategory",
        populate:{
          path:"parentCategory",
          populate:{
            path:"parentCategory",
            
          }
        }
      
    }}

    ]);
    res.status(200).json({
      category: data,
      message: "get Single category product",
    });
  
})
//================create product
export const updateSingleCategoryProducts = (async (req, res, next) => {

    const { id } = req.params;
    const { name,icon ,parentCategory} = req.body;
      const updateData = await CategoryModel.findById(id);

      if(!updateData){
        res.status(200).json({
          message: "Catagory not found !",
        });
      }
      let updateCatPhoto = updateData.photo
      let updateParentCat = updateData.parentCategory
      let updateIcon = updateData.icon
      if(req.file){
        const updateUrl = await cloudUpload(req)    
        updateCatPhoto = updateUrl.secure_url
        await cloudDelete(publicIdGenerator(updateData.photo))
      }
        if(parentCategory){
           updateParentCat = parentCategory    
        }
        if(icon){
           updateIcon = icon    
        }
          updateData.name = name;
          updateData.slug = createSlug(name);
          updateData.icon = updateIcon;
          updateData.parentCategory =updateParentCat,
          console.log(updateCatPhoto)
          updateData.photo = updateCatPhoto
          updateData.save()
         res.status(200).json({
        category: updateData,
        message: "Update Single category product",
      });
      
     
  
});
//================delete product
export const deleteSingleCategoryProducts = asyncHandler(async (req, res, next) => {
  
    const { id } = req.params;
    const data = await CategoryModel.findByIdAndDelete(id);
    if(data.photo){
     const publicId = publicIdGenerator(data.photo)
     await cloudDelete(publicId)
    }
    res.status(200).json({
      category: data,
      message: "Delete Single category product",
    });
  
});

//================status update category product
export const statusSingleCategoryProducts = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    const data = await CategoryModel.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Status Single category product",
    });
  
});

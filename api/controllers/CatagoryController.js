

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
  
    const categoryCheck = await CategoryModel.findOne({name})
  
    if(categoryCheck){
     return res.status(400).json({
        message: "category already exists",
      });
    }else{
        // category icon 
  let catIcon = null
  if(icon){
    catIcon = icon
  }
  // category icon 
  let catPhoto = null
  if(req.file){
   const cata = await cloudUpload(req)
    catPhoto =cata.secure_url
  }
    const data = await CategoryModel.create({
      name,
      slug: createSlug(name),
      parentCategory:parentCategory?parentCategory:null,
      icon:catIcon,
      photo:catPhoto
    });
if(parentCategory){
  const parent = await CategoryModel.findByIdAndUpdate(parentCategory,{$push:{subCategory:data._id}})
}
   return res.status(200).json({
      category: data,
      message: "create product",
    });
    }


  
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
            populate:{
              path:"subCategory",
            }
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
export const updateSingleCategoryProducts = async (req, res, next) => {
  const { id } = req.params;
  const { name, icon, parentCategory } = req.body;
    const updateData = await CategoryModel.findById(id);

    if (!updateData) {
      return res.status(404).json({
        message: "Category not found!",
      });
    }

    let updateCatPhoto = updateData.photo;
    let updateName = updateData.name;
    let updateSlug = updateData.slug;
    let updateParentCat = updateData.parentCategory;
    let updateIcon = updateData.icon;

    if (req.file) {
      const updateUrl = await cloudUpload(req);
      updateCatPhoto = updateUrl.secure_url;

      if (updateData.photo) {
        await cloudDelete(publicIdGenerator(updateData.photo));
      }
    }

    if (parentCategory) {
      updateParentCat = parentCategory;
    }
    if(parentCategory||updateData.parentCategory){
      await CategoryModel.findByIdAndUpdate(parentCategory,{$push:{subCategory:updateData._id}})
    }
    if (name) {
      updateName = name;
    }
    if (name) {
      updateSlug = createSlug(name);
    }

    if (icon) {
      updateIcon = icon;
    }

    updateData.name = updateName;
    updateData.slug = updateSlug;
    updateData.icon = updateIcon;
    updateData.parentCategory = updateParentCat;
    updateData.photo = updateCatPhoto;
    await updateData.save();
    return res.status(200).json({
      category: updateData,
      message: "Update Single category product",
    });
  
};

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

import { ProductModel } from "../model/productModel.js";
import { cloudUploads } from "../utility/Cloudinary.js";
import { createSlug } from "../utility/CreateSlug.js";
import asyncHandler from "express-async-handler"

/**
 * @DESC get all product
 * @ROUTE /api/v1/prdouct/
 * @METHOD get
 * @ACCESS public
 */
export const GetAllProducts = asyncHandler(async (req, res, next) => {
 
    const data = await ProductModel.find()

    res.status(200).json({
      product: data,
      message: "get All product",
    }); 
  
})
/**
 * @DESC create proudct
 * @ROUTE /api/v1/prdouct/
 * @METHOD post
 * @ACCESS private
 */
export const createProducts = asyncHandler(async (req, res, next) => {
  
    const {
      name,
      productType,
      simpleProduct,
      variableProduct,
      groupProduct,
      externalProduct,
      longDesc,
      shortDesc,
     
    } = req.body;
  
  const productCheck = await ProductModel.findOne({name});
  if(productCheck){
    res.status(200).json({
    
      message: "already product exists",
    });
  }
//==================== product photo
let productFiles =[]
if(req.files){
  for(let i =0; i<req.files.length; i++){
    const fileUrl = await cloudUploads(req.files[i].path)
    productFiles.push(fileUrl)
  }
}

const simpleData = JSON.parse(simpleProduct)

    const data = await ProductModel.create({
      name,
      slug:createSlug(name),
      productType,
      simpleProduct:productType==="simple"?{...simpleData,productPhotos:productFiles}:null,
      variableProduct :productType==="variable"?variableProduct:null,
      groupProduct :productType==="group"?groupProduct:null,
      externalProduct:productType==="external"?externalProduct:null,
      longDesc,
      shortDesc,
      // productPhotos:productFiles
    });
    res.status(200).json({
      product: data,
      message: "create product",
    });
 
 
})
/**
 * @DESC get single proudct
 * @ROUTE /api/v1/prdouct/:id
 * @METHOD post
 * @ACCESS public
 */
export const getSingleProducts = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const data = await ProductModel.findById({ _id: id });
    if(!data){
      res.status(200).json({
        message: "Single product not found",
      });
    }
    res.status(200).json({
      product: data,
      message: "get Single product",
    });
  
})
/**
 * @DESC update single proudct
 * @ROUTE /api/v1/prdouct/:id
 * @METHOD put
 * @ACCESS private
 */
export const updateSingleProducts = (async (req, res, next) => {

    const { id } = req.params;
    const { name, sale_price, raguler_price, short_dis, long_dis, stock } =
      req.body;
    const data = await ProductModel.findByIdAndUpdate(id, {
      name,
      sale_price,
      raguler_price,
      short_dis,
      long_dis,
      stock,
    });
    res.status(200).json({
      product: data,
      message: "Update Single product",
    });
  
});
/**
 * @DESC delete single proudct
 * @ROUTE /api/v1/prdouct/:id
 * @METHOD delete
 * @ACCESS privete
 */
export const deleteSingleProducts = asyncHandler(async (req, res, next) => {
 
    const { id } = req.params;
    const data = await ProductModel.findByIdAndDelete(id);
    res.status(200).json({
      product: data,
      message: "Delete Single product",
    });

});
/**
 * @DESC update status proudct
 * @ROUTE /api/v1/prdouct/:id
 * @METHOD patch
 * @ACCESS private
 */
export const statusUpdateSingleProducts = asyncHandler(async (req, res, next) => {
 
    const { id } = req.params;
    const { status } = req.body;
    const data = await ProductModel.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );
    res.status(200).json({
      product: data,
      message: "Status Single product",
    });

});

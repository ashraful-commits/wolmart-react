// create atuh slice

import { createSlice } from "@reduxjs/toolkit";
import { CategoryStatusUpdate, ProductStatusUpdate, TagStatusUpdate, brandStatusUpdate, createBrand, createCategory, createProduct, createTag, deleteBrand, deleteCategory, deleteProduct, deleteTag, getAllBrands, getAllCategory, getAllProduct, getAllTags, updateBrand, updateCategory, updateProduct, updateTag } from "./ProductApiSlice";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
   product:null,
   brand:null,
   category:null,
   tag:null,
   role:null,
   user:null,
   error:null,
   message:null,
   loader:false
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createBrand.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(createBrand.fulfilled,(state,action)=>{
 
        state.loader= false
        state.brand = state.brand ?? [],
        state.brand.push(action.payload.brand)
        state.message = action.payload.message
    }).addCase(createBrand.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(getAllBrands.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(getAllBrands.fulfilled,(state,action)=>{
        state.loader= false
        state.brand = action.payload.brands
    }).addCase(getAllBrands.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(updateBrand.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(updateBrand.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.brand[state.brand.findIndex((item)=>item._id===action.payload.brand._id)] = action.payload.brand
        state.message = action.payload.message
    }).addCase(updateBrand.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(deleteBrand.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(deleteBrand.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.brand = [...state.brand.filter((item)=>item._id!==action.payload.brand._id)]
    }).addCase(deleteBrand.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(brandStatusUpdate.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(brandStatusUpdate.fulfilled,(state,action)=>{
        state.loader= false
        state.brand[state.brand.findIndex((item)=>item._id===action.payload.brand._id)] = action.payload.brand
        state.message = action.payload.message
    }).addCase(brandStatusUpdate.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(createTag.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(createTag.fulfilled,(state,action)=>{
 
        state.loader= false
        state.tag = state.tag ?? [],
        state.tag.push(action.payload.tag)
        state.message = action.payload.message
    }).addCase(createTag.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(getAllTags.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(getAllTags.fulfilled,(state,action)=>{
        state.loader= false
        state.tag = action.payload.tag
    }).addCase(getAllTags.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(updateTag.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(updateTag.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.tag[state.tag.findIndex((item)=>item._id===action.payload.tag._id)] = action.payload.tag
        state.message = action.payload.message
    }).addCase(updateTag.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(deleteTag.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(deleteTag.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.tag = [...state.tag.filter((item)=>item._id!==action.payload.tag._id)]
    }).addCase(deleteTag.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(TagStatusUpdate.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(TagStatusUpdate.fulfilled,(state,action)=>{
        state.loader= false
        state.tag[state.tag.findIndex((item)=>item._id===action.payload.tag._id)] = action.payload.tag
        state.message = action.payload.message
    }).addCase(TagStatusUpdate.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(createCategory.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(createCategory.fulfilled,(state,action)=>{
 
        state.loader= false
        state.category = state.category ?? [],
        state.category.push(action.payload.category)
        state.message = action.payload.message
    }).addCase(createCategory.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(getAllCategory.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(getAllCategory.fulfilled,(state,action)=>{
        state.loader= false
        state.category = action.payload.category
    }).addCase(getAllCategory.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(updateCategory.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(updateCategory.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.category[state.category.findIndex((item)=>item._id===action.payload.category._id)] = action.payload.category
        state.message = action.payload.message
    }).addCase(updateCategory.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(deleteCategory.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(deleteCategory.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.category = [...state.category.filter((item)=>item._id!==action.payload.category._id)]
    }).addCase(deleteCategory.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(CategoryStatusUpdate.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(CategoryStatusUpdate.fulfilled,(state,action)=>{
        state.loader= false
        state.category[state.category.findIndex((item)=>item._id===action.payload.category._id)] = action.payload.category
        state.message = action.payload.message
    }).addCase(CategoryStatusUpdate.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(createProduct.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(createProduct.fulfilled,(state,action)=>{
 
        state.loader= false
        state.category = state.category ?? [],
        state.category.push(action.payload.product)
        state.message = action.payload.message
    }).addCase(createProduct.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(getAllProduct.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(getAllProduct.fulfilled,(state,action)=>{
        state.loader= false
        state.product = action.payload.product
    }).addCase(getAllProduct.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(updateProduct.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(updateProduct.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.product[state.product.findIndex((item)=>item._id===action.payload.product._id)] = action.payload.product
        state.message = action.payload.message
    }).addCase(updateProduct.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(deleteProduct.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(deleteProduct.fulfilled,(state,action)=>{
        state.loader= false
        state.message = action.payload.message
        state.product = [...state.product.filter((item)=>item._id!==action.payload.product._id)]
    }).addCase(deleteProduct.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    }).addCase(ProductStatusUpdate.pending,(state,action)=>{
        state.loader= true
        
    }).addCase(ProductStatusUpdate.fulfilled,(state,action)=>{
        state.loader= false
        state.product[state.product.findIndex((item)=>item._id===action.payload.product._id)] = action.payload.product
        state.message = action.payload.message
    }).addCase(ProductStatusUpdate.rejected,(state,action)=>{
        state.error = action.error.message,
        state.loader = false
    })
}

})


export const getAllProductState = (state)=>state.Products

export const { setMessageEmpty } = ProductSlice.actions;
export default ProductSlice.reducer;

// create atuh slice

import { createSlice } from "@reduxjs/toolkit";
import { brandStatusUpdate, createBrand, deleteBrand, getAllBrands, updateBrand } from "./ProductApiSlice";

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
      state.message = "";
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
    })
}

})


export const getAllProductState = (state)=>state.Products

export const { setMessageEmpty } = ProductSlice.actions;
export default ProductSlice.reducer;

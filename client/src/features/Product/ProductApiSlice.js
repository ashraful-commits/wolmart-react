import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//=============== create user

//==============================get all brands
export const getAllBrands = createAsyncThunk(
  "brand/getAllBrands",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/brand",
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//==============================create  brands
export const createBrand = createAsyncThunk(
  "brand/createBrand",
  async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/brand/",
     data,{withCredentials:true}
      );
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// update brand 
export const updateBrand = createAsyncThunk(
  "brand/updateBrand",
  async (data) => {
    console.log(data)
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/brand/${data.DataId}`,data.formData,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete brand 
    export const deleteBrand = createAsyncThunk(
  "brand/deleteBrand",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/brand/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete brand 
    export const brandStatusUpdate = createAsyncThunk(
  "brand/brandStatusUpdate",
  async ({id,status}) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/brand/${id}`,{status:!status},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);




//==============================get all tags
export const getAllTags = createAsyncThunk(
  "tag/getAllTags",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/tags",
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//==============================create  Tags
export const createTag = createAsyncThunk(
  "tag/createTag",
  async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/tags/",
     data,{withCredentials:true}
      );
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// update Tag 
export const updateTag = createAsyncThunk(
  "tag/updateTag",
  async ({name,DataId}) => {
    
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/tags/${DataId}`,{name},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete Tag 
    export const deleteTag = createAsyncThunk(
  "tag/deleteTag",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/tags/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete Tag 
    export const TagStatusUpdate = createAsyncThunk(
  "tag/TagStatusUpdate",
  async ({id,status}) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/tags/${id}`,{status:!status},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);



//==============================get all Category
export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/category",
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//==============================create  Category
export const createCategory = createAsyncThunk(
  "category/createCategory",
  async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/category/",
     data,{withCredentials:true}
      );
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// update Tag 
export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (data) => {
    
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/category/${data.DataId}`,data.formData,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete Tag 
    export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/category/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete Tag 
    export const CategoryStatusUpdate = createAsyncThunk(
  "category/CategoryStatusUpdate",
  async ({id,status}) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/category/${id}`,{status:!status},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);



//==============================get all Product
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/product",
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
//==============================create  Product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/product/",
     data,{withCredentials:true}
      );
      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


// update Tag 
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data) => {
    
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/product/${data.DataId}`,data.formData,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete Tag 
    export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/product/${id}`,
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// delete Tag 
    export const ProductStatusUpdate = createAsyncThunk(
  "product/ProductStatusUpdate",
  async ({id,status}) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/product/${id}`,{status:!status},
     {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
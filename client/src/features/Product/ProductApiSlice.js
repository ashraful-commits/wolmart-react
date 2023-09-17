import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//=============== create user

//==============================get all brands
export const getAllBrands = createAsyncThunk(
  "product/getAllBrands",
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
  "product/createBrand",
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
  "product/updateBrand",
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
  "product/deleteBrand",
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
  "product/brandStatusUpdate",
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
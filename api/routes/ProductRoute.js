import express from "express";
import {
  GetAllProducts,
  createProducts,
  deleteSingleProducts,
  getSingleProducts,
  statusUpdateSingleProducts,
  updateSingleProducts,
} from "../controllers/productController.js";
import {
  ProductPhoto,
  galleryPhotoUpload,
  singlePhotoUpload,
} from "../middlewares/multer.js";

// create route

const productRoute = express.Router();

productRoute
  .get("/", GetAllProducts)
  .post("/", ProductPhoto, createProducts);
productRoute
  .get("/:id", getSingleProducts)
  .put("/:id", ProductPhoto, updateSingleProducts)
  .patch("/:id", statusUpdateSingleProducts)
  .delete("/:id", deleteSingleProducts);
export default productRoute;

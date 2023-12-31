import express from "express";
import {
  GetAllBrandProducts,
  createBrandProducts,
  deleteSingleBrandProducts,
  getSingleBrandProducts,
  statusSingleBrandProducts,
  updateSingleBrandProducts,
} from "../controllers/BrandController.js";
import { tokenVerify } from "../middlewares/TokenVerify.js";
import { brandLogo } from "../middlewares/multer.js";




const BrandRoute = express.Router();
// BrandRoute.use(tokenVerify)


BrandRoute.get("/", GetAllBrandProducts).post(
  "/",
  brandLogo,createBrandProducts
);
BrandRoute.get("/:id", getSingleBrandProducts)
  .put("/:id", brandLogo, updateSingleBrandProducts)
  .patch("/:id", statusSingleBrandProducts)
  .delete("/:id", deleteSingleBrandProducts);
export default BrandRoute;

import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import { MongoDBCnncetion } from "./config/mongoDBConncetion.js";
import productRoute from "./routes/ProductRoute.js";
import { errorHandler } from "./middlewares/errorHendler.js";
import BrandRoute from "./routes/BrandRoute.js";

import TagRoute from "./routes/TagRoute.js";
import privetRouter from "./routes/privetRouter.js";
import cookiesParser from "cookie-parser"
import permissionRouter from "./routes/Permission.js";
import RoleRouter from "./routes/Role.js";
import categoryRoute from "./routes/CatagoryRoute.js";
//===============================================> dotenv config
dotenv.config();
//===============================================> evn
const port = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookiesParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("api/public"));

//================================================> routes
app.use("/api/v1/auth", privetRouter);
app.use("/api/v1/permission", permissionRouter);
app.use("/api/v1/role", RoleRouter);
app.use("/api/v1/brand", BrandRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/tags", TagRoute);
app.use("/api/v1/product", productRoute);
app.use(errorHandler);
//================================================> create server
app.listen(port, () => {
  MongoDBCnncetion();
  console.log(`Server running on port ${port}`.bgCyan.yellow);
});

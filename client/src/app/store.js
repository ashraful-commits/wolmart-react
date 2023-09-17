import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import userSlice from "../features/user/userSlice";
import ProductSlice from "../features/Product/ProductSlice";

const store = configureStore({
  reducer: {
    Auth: authSlice,
    User: userSlice, 
    Products: ProductSlice, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;

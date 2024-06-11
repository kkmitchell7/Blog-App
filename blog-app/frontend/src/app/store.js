import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import blogReducer from "../features/blogsSlice";
import categoryReducer from "../features/categoriesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
    categories: categoryReducer,
  },
});
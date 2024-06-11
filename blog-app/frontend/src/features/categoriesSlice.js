import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import categoryService from "../services/categoryService";

const initialState = {
  addCategory: null,
  editCategory: null,
  deleteCategory: null,
  categories: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      return await categoryService.fetchCategories();
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (_, thunkAPI) => {
    try {
      return await categoryService.createCategory();
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (_, thunkAPI) => {
    try {
      return await categoryService.updateCategory();
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (_, thunkAPI) => {
    try {
      return await categoryService.deleteCategory();
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const categoriesSlice = createSlice({ //need to fix here
  name: "categories",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetSuccessAndError: (state) => {
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload.data;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = payload.message;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.message = payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset, resetSuccessAndError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
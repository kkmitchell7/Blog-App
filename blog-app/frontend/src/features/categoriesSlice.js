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
  async (category, thunkAPI) => {
    try {
      console.log("trying to create real")
      return await categoryService.createCategory(category);
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async (category, thunkAPI) => {
    try {
      return await categoryService.updateCategory(category);
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCategoryByID = createAsyncThunk(
  "categories/deleteCategory",
  async (id, thunkAPI) => {
    try {
      return await categoryService.deleteCategory(id);
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
      },
      setEditCategory: (state, { payload }) => {
        state.editCategory = payload;
        state.addCategory = null;
        state.deleteCategory = null;
      },
      setAddCategory: (state, { payload }) => {
        state.addCategory = payload;
        state.editCategory = null;
        state.deleteCategory = null;
      },
      setDeleteCategory: (state, { payload }) => {
        state.deleteCategory = payload;
        state.addCategory = null;
        state.editCategory = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload.data;
        //state.isSuccess = true;
        state.isLoading = false;
        //state.message = payload.message;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.message = payload;
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, { payload }) => {
        state.categories.push(payload.data);
        state.addCategory = null;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
      })
      .addCase(createCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, { payload }) => {
        const index = state.categories.findIndex((x) => x.id === payload.data.id);
        state.categories = state.categories.filter((x) => x.id !== payload.data.id);
        state.categories.splice(index, 0, payload.data);
        state.editCategory = null;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = payload.message;
      })
      .addCase(updateCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload.message;
      })
      .addCase(deleteCategoryByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategoryByID.fulfilled, (state, { payload }) => {
        state.categories = state.categories.filter((x) => x !== payload.id);
        state.deleteCategory = null;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        state.message = payload.message;
      })
      .addCase(deleteCategoryByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = payload.message;
      });
  },
});

export const { reset, resetSuccessAndError,setAddCategory,
  setEditCategory,
  setDeleteCategory, } = categoriesSlice.actions;
export default categoriesSlice.reducer;
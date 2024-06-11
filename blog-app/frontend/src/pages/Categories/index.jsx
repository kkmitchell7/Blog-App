import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import CategoryList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import AddEditCategoryModal from "../../components/AddEditCategoryModal";
import DeleteCategoryModal from "../../components/DeleteCategoryModal";

import {
  fetchCategories,
  resetSuccessAndError as resetCategory,
} from "../../features/categoriesSlice";


export default function CategoriesPage() {

  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [addCategory, setAddCategory] = useState();
  const [editCategory, setEditCategory] = useState();
  const [deleteCategory, setDeleteCategory] = useState();

  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);



  const onCategoryAdd = () => {
    setAddCategory({
      title: "",
      description: "",
      color: "#000000",
    });
  };

  const onCategoryUpdate = (category) => {
    setEditCategory(category);
  };

  const onCategoryDelete = (category) => {
    setDeleteCategory(category);
  };

  const createCategory = async (category) => {
    try {
      const newCategory = await categoryService.createCategory(category);
      setIsSuccess(true);
      setMessage(newCategory.message);
      setCategories((prev) => {
        return [...prev, newCategory.data];
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setAddCategory(null);
  };

  const updateCategory = async (category) => {
    try {
      const updatedCategory = await categoryService.updateCategory(category);
      setIsSuccess(true);
      setMessage(updatedCategory.message);
      setCategories((prev) => {
        const index = prev.findIndex((x) => x.id === updatedCategory.data.id);
        prev[index] = updatedCategory.data;
        return prev;
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setEditCategory(null);
  };

  const removeCategory = async (category) => {
    try {
      const newBlog = await categoryService.deleteCategory(category.id);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setCategories((prev) => prev.filter((x) => x.id !== category.id));
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setDeleteCategory(null);
  };

  const AddButton = () => {
    if(!user?.token) return null;
    return (
      <button className="btn btn-outline-dark h-75" onClick={onCategoryAdd}>
        ADD CATEGORY
      </button>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SubHeading subHeading={"Categories"} />
          <AddButton />
        </div>
        <CategoryList
          categories={categories}
          onEdit={onCategoryUpdate}
          onDelete={onCategoryDelete}
        ></CategoryList>
      </div>
      <Footer />
      <AddEditCategoryModal
        addCategory={addCategory}
        editCategory={editCategory}
        createCategory={createCategory}
        updateCategory={updateCategory}
        onClose={() => {
          setAddCategory(null);
          setEditCategory(null);
        }}
      />
      <DeleteCategoryModal
        deleteCategory={deleteCategory}
        removeCategory={removeCategory}
        onClose={() => setDeleteCategory(null)}
      />
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
          setMessage("");
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          setIsError(false);
          setMessage("");
        }}
      />
    </>
  );
}

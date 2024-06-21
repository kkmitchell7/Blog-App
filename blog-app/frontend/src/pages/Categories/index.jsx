import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import CategoryList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import AddEditCategoryModal from "../../components/AddEditCategoryModal";
import DeleteCategoryModal from "../../components/DeleteCategoryModal";

import {
  fetchCategories,
  resetSuccessAndError,
  setAddCategory,
} from "../../features/categoriesSlice";

export default function CategoriesPage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const {
    categories,
    isError,
    isSuccess,
    isLoading: loading,
    message
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    return () => {
      dispatch(resetSuccessAndError());
    };
  }, []);

  const onCategoryAdd = () => {
    dispatch(setAddCategory({
      title: "",
      description: "",
      color: "#000000",
    }));
  };

  const AddButton = () => {
    if (!user || !user.token) return null;
    return (
      <button className="btn btn-outline-dark m-3" onClick={onCategoryAdd}>
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
          <p className="page-subtitle">Categories</p>
          <AddButton />
        </div>
        <CategoryList
          categories={categories}
          editButtons={true}
        ></CategoryList>
      </div>
      <Footer />
      <AddEditCategoryModal/>
      <DeleteCategoryModal/>
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          dispatch(resetSuccessAndError());
        }}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={() => {
          dispatch(resetSuccessAndError());
        }}
      />
    </>
  );
}
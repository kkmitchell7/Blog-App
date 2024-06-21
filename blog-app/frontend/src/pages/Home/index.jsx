import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";


import { fetchBlogs, resetSuccessAndError as resetBlog } from "../../features/blogsSlice";
import { fetchCategories, resetSuccessAndError as resetCategory } from "../../features/categoriesSlice";




export default function Home() {

  const dispatch = useDispatch();

  const {
    blogs,
    isError: isBlogsError,
    isSuccess: isBlogSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = useSelector((state) => state.blogs);

  const {
    categories,
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchBlogs());
        dispatch(fetchCategories());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  if (isLoadingCategories || isLoadingBlogs){
    return <Loading />
  }

  return (
    <>
      <Navbar />
      <Heading  />
      <div className="container">
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoriesList categories={categories} editButtons={false} />
        <Footer />
      </div>
    </>
  );
}

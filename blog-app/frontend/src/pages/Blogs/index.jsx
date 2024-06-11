import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/Subheading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import { useParams, Link } from "react-router-dom";

import "./index.css";

import AddEditBlogModal from "../../components/AddEditBlogModal";
import Loading from "../../components/Loading";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import DeleteBlogModal from "../../components/DeleteBlogModal";

import {
  setAddBlog,
  fetchBlogsByCategoryId,
  resetSuccessAndError as resetBlog,
} from "../../features/blogsSlice";
import {
  fetchCategories,
  resetSuccessAndError as resetCategory,
} from "../../features/categoriesSlice";



export default function BlogsPage() {
  const { categoryId } = useParams();

  const user = useSelector((state) => state.auth.user);

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
    dispatch(fetchCategories());
    dispatch(fetchBlogsByCategoryId(categoryId));
    return () => {
      dispatch(resetBlog());
      dispatch(resetCategory());
    };
  }, [categoryId]);

  const onAddBlog = () => {
    dispatch(setAddBlog({
      title: "",
      description: "",
      categories: [],
      authorId: user?._id,
      content: [
        {
          sectionHeader: "",
          sectionText: "",
        },
      ],
    }));
  };

  const AddBlog = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="page-subtitle">Blog Posts</p>
        {user && (
          <button
            style={{ margin: "16px" }}
            type="button"
            className="btn btn-outline-secondary"
            onClick={onAddBlog}
          >
            Add Blog Post
          </button>
        )}
      </div>
    );
  };



  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }

    return(
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16" className="pb-1">
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
      </svg>
      {categoryId == null ? (
      <Link
          className="link"
          key={0}
          to={"/blogs"}
          style={{ color: "black" }}
          onClick={() => categoryId = null} //need to fix so it turns black!
        >
          <p key={0}>All</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={0}
          to={"/blogs"}
          style={{ color: "grey" }}
          onClick={() => categoryId = null}
        >
          <p key={0}>All</p>
        </Link>
      )}
      {categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "grey" }}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
      })
      }  
      </>  
      
    )
  };

  if (isLoadingCategories || isLoadingBlogs) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList />
        </div>
        <AddBlog />
        <BlogList blogPosts={blogs} />
      </div>
      <Footer />
      <AddEditBlogModal />
      <DeleteBlogModal />
      <SuccessToast
        show={isBlogSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}

import React, { useState, useEffect } from "react";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";
import SuccessToast from "../../services/SuccessToast";
import Loading from "../Loading";
import ErrorToast from "../../services/ErrorToast";
import Footer from "../Footer";
import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";



// need to do this for all data from api
const data = require("../../dummy-data.json");
const user = data.user; //need to convert these to api requests


export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const blogs = await blogService.fetchBlogs();
        setBlogs(blogs.data.reverse());
        const categories = await categoryService.fetchCategories();
        setCategories(categories.data);
        setIsSuccess(true);
        setMessage(blogs.message);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setMessage(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  }

   const resetError = () => {
    setIsError(false);
    setMessage("");
  }

  if (isLoading) {
    return <Loading />;
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <Heading user={user} />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
      </div>
      <SuccessToast
        show={isSuccess}
        message={message}
        onClose={resetSuccess}
      />
      <ErrorToast
        show={isError}
        message={message}
        onClose={resetError}
      />
      <Footer />
    </>
  );
}
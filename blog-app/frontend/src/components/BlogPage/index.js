import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import SubHeading from "../SubHeading";
import BlogGridInline from "../BlogGridInline";
import Footer from "../Footer";
import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const user = data.user;

export default function BlogPage() {
  const { categoryIdParam } = useParams()
  
  const [categoryId, setCategoryId ] = useState();

  const [blogs,setBlogs] = useState();

  const [categories,setCategories] = useState();

  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchBlogs = async()=>{
      try{
        if (categoryId == 0 || categoryId == null){
          const blogsRes = await blogService.getBlogs();
          setBlogs(blogsRes);
        }else if (categoryId){
          const blogsRes = await categoryService.getCategoriesbyID(categoryId);
          setBlogs(blogsRes);
        }
      } catch(err){
        console.log(err)
      }
    }
    fetchBlogs();
    setLoading(false);
    return() => {
      //cleanup code, subscriptions so we're not reloading when subscribed to databases when not on the page
    }
  }, [categoryId]);

    useEffect(()=>{
      const fetchCategories = async()=>{
        try{
          const categoryRes = await categoryService
          .getCategories()
          setCategories(categoryRes)
        } catch(err){
          console.log(err)
        }
      }
      fetchCategories();
    },[]);

  const CategoriesList = () => {
      if (categories){
      return(
      <>
      <button
          key={0}
          onClick={() => setCategoryId(0)}
          style={{ color: "black" }}
        ><p key={0}>All</p></button>
        {
        categories.map((category, index) => {
          return (
            categoryId === category.id.toString() ? (
            <button
              key={category.id}
              onClick={() => setCategoryId(category.id)} //fix this here to be a link!
              style={{ color: "blue" }}
            >
            <p key={category.id}>{category.title}</p>
            </button>
            ) : (
            <button
              key={category.id}
              onClick={() => setCategoryId(category.id)}
              style={{ color: "black" }}
            >
              <p key={category.id}>{category.title}</p>
            </button>
          ));
        })}
        </>  
      )
    }
  };

  if (loading) {
    return(
      <div className="">
        <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      </div>
    )
  } else{
    return (
      <>
        <Navbar />
        <div className="container">
          <Heading user={user} />
          <div className="scroll-menu">
            <CategoriesList />
          </div>
          <SubHeading subHeading={"Blog Posts"} />
          <BlogGridInline blogPosts={blogs}></BlogGridInline>
          <Footer />
        </div>
      </>
    );
  }
}

//<Footer />
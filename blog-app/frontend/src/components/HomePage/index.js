import React, { useState, useEffect } from "react";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";
import Footer from "../Footer";
import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";



// need to do this for all data from api
const data = require("../../dummy-data.json");
const user = data.user; //need to convert these to api requests



export default function HomePage() {
  const [blogs,setBlogs] = useState();

  useEffect(()=>{
    const fetchBlogs = async()=>{
      try{
        const blogsRes = await blogService.getBlogs()
        setBlogs(blogsRes)
      } catch(err){
        console.log(err)
      }
    }
    fetchBlogs();
    
  },[]);

  const [categories,setCategories] = useState();

  useEffect(()=>{
    const fetchCategories = async()=>{
      try{
        const categoryRes = await categoryService.getCategories()
        setCategories(categoryRes)
      } catch(err){
        console.log(err)
      }
    }
    fetchCategories();
    
  },[]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading user={user} />
        <SubHeading subHeading={"Recent Blog Posts"} />
        <BlogGrid blogPosts={blogs}></BlogGrid>
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}
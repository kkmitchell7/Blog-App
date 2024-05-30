import React, { useState, useEffect } from "react";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";
import Footer from "../Footer";
import categoryService from "../../services/categoryService";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const user = data.user;

export default function CategoriesPage() {

  const [categories,setCategories] = useState();

  useEffect(()=>{
    const fetchCategories = async()=>{
      try{
        const categoryRes = await categoryService.fetchCategories()
        setCategories(categoryRes.data)
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
        <SubHeading subHeading={"Categories"} />
        <CategoryList categories={categories}></CategoryList>
        <Footer />
      </div>
    </>
  );
}

//<Footer />
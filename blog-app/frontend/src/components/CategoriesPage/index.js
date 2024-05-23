import React from "react";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";
import Footer from "../Footer";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const categories = data.categories;
const user = data.user;

export default function CategoriesPage() {
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
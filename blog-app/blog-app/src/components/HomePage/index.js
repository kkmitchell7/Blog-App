import React from "react";

import Heading from "../Heading";
import Navbar from "../Navbar";
import BlogGrid from "../BlogGrid";
import SubHeading from "../SubHeading";
import CategoryList from "../CategoryList";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogs = data.blogs;
const categories = data.categories;
const user = data.user;

export default function HomePage() {
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
    </>
  );
}
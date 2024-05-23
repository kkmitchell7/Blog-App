import React from "react";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import SubHeading from "../SubHeading";
import BlogGridInline from "../BlogGridInline";
import Footer from "../Footer";

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const blogs = data.blogPosts;
const user = data.user;

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading user={user} />
        <SubHeading subHeading={"Blog Posts"} />
        <BlogGridInline blogPosts={blogs}></BlogGridInline>
        <Footer />
      </div>
    </>
  );
}

//<Footer />
import React from "react";

import "./index.css";

import BlogItem from "../BlogItem";

export default function BlogGridInline({ blogPosts }) {
  
  if (!blogPosts || !blogPosts.length) {
    console.log("null!");
    return null;
  }
  return(
  <div className="blog-grid-container row w-100 d-flex pt-3 h-100">
  {
    blogPosts.map((blog)=> {
      return (
      <>
      <React.Fragment key={blog.id}>
          <div className="item-main p-3 col-med-1">
              <BlogItem
                imageOrientation={"top"}
                key={blog.id}
                index={blog.id}
                blogPost={blog}
                genCategories = {false}
              />
          </div>
  
      </React.Fragment>
      </>
    );})
  }
  </div>
  )
}
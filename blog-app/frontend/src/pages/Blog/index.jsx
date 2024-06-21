import React, { useEffect, useState } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";

import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

import blogService from "../../services/blogService";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loading from "../../components/Loading";

import "./index.css";

import {
  fetchBlogById,
  resetSuccessAndError
} from "../../features/blogsSlice";

export default function BlogPage() {
  const navigate = useNavigate();
  const { blogId } = useParams();

  const dispatch = useDispatch();
  const {
    blog,
    isError,
    isSuccess,
    isLoading,
    message
  } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogById(blogId))
    return () => {
      dispatch(resetSuccessAndError());
    };
  }, [blogId]);


  const navigateToAuthorProfile = () => {
    navigate("/profile/" + blog.author.id);
  };

  if (!blog){
    console.log("no blog")
  }

  if (isLoading){
    console.log("loading")
  }


  if (isLoading || !blog) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <img src={blog.image} className="my-3 cover-img" alt="..." />
        <div className="row g-5">
          <div className="col-md-8">
            <article className="blog-post">
              <div className="my-5">
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-meta">
                  {blog.updatedAt.slice(0, 10)} by{" "}
                  <Link to={"/profile/" + blog.author.id}>
                    {blog.author.firstName} {blog.author.lastName}
                  </Link>
                </p>
                <p>{blog.description}</p>
                <Categories blogPost={blog} />
              </div>
              <hr />
              {blog.content.map((content, index) => {
                return (
                  <div key={index} className="my-5">
                    <h2 className="my-3">{content.sectionHeader}</h2>
                    <p>{content.sectionText}</p>
                  </div>
                );
              })}
            </article>
          </div>
          <div className="author col-md-4" onClick={navigateToAuthorProfile}>
            <div className="position-sticky my-5" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About the author</h4>
                <img src={blog.author.image} className="avatar" alt="..." />
                <p>{blog.author.bio.substring(0, 100)}...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ErrorToast show={isError} message={message} onClose={resetSuccessAndError} />
    </>
  );
}
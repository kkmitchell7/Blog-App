import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BlogItemText from "../BlogItemText";
import EditButtons from "../EditButtons";

import "../../App.css";
import "./index.css";

export default function BlogItem({
  index,
  blog,
  imageOrientation,
  onBlogEdit,
  onBlogDelete,
}) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const navigateToBlog = () => {
    if (!user || !onBlogEdit || !onBlogDelete || blog.author.id != user._id) {
      navigate(`/blog/${blog.id}`);
    }
  };

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => dispatch(onBlogEdit(blog))}
        onDelete={() => dispatch(onBlogDelete(blog))}
        onNavigate={() => navigate(`/blog/${blog.id}`)}
      />
    );
  };
  if (imageOrientation === "top") {
    return (
      <div key={index} className="card-1" onClick={navigateToBlog}>
        <img src={blog.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          {user && user.token && onBlogEdit && onBlogDelete && blog.author.id == user._id ? (
            <EditButtonsContainer />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div key={index} className="card-2" onClick={navigateToBlog}>
        <img src={blog.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText blogPost={blog} headerFontSize="20px" />
          {onBlogEdit && onBlogDelete ? <EditButtonsContainer /> : null}
        </div>
      </div>
    );
  }
}

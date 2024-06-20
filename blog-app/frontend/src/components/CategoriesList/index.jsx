import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./index.css";

import EditButtons from "../EditButtons";

export default function CategoriesList({ categories, onEdit, onDelete }) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  
  if (!categories && !categories?.length) {
    return null;
  }

  const navigateToCategory = (category) => {
    if (!user || !onEdit || !onDelete) {
      navigate(`/blogs/${category.id}`);
    }
  };

  const navigateToCategoryIcon= (category) => {
    navigate(`/blogs/${category.id}`);
  }

  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            onClick={() => {
              navigateToCategory(category);
            }}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: category.color + "22",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(0, 100)}...
              </p>
            </div>
            {
              user && user.token && onEdit && onDelete && (
                <EditButtons
                  onEdit={() => {
                    onEdit(category);
                  }}
                  onDelete={() => {
                    onDelete(category);
                  }}
                  onNavigate={() => {
                    navigateToCategoryIcon(category);
                  }}
                />
              )
            }
          </button>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
};

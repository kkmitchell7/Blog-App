import React from "react";
import PropTypes from "prop-types";

import "./index.css";

export default function CategoryList({ categories }) {
  if (categories){
    return (
      <div className="category-list">
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              className="card p-2"
              style={{ borderRadius: "30px", border: "none" }}
              onClick={() => {
                console.log("TODO: Navigate to categories page");
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: category.color +"33",
                  color: category.color,
                  position: "relative",
                  zIndex: 0,
                  width:" 100%",
                }}
              >
                <h5 className="card-title">{category.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  {category.description.substring(0, 100)}...
                </p>
              </div>
            </button>
          );
        })}
      </div>
    );
  } else {
    return;
  }

}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};
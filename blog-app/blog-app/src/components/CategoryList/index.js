import React from "react";

import "./index.css";

export default function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            onClick={() => {
              console.log("TODO: Navigate to categories page");
            }}
          >
            <div
              className="card-body rounded-pill"
              style={{
                backgroundColor: category.color,
                position: "relative",
                zIndex: 0,
                width:" 100%",
                color: "white"
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
}
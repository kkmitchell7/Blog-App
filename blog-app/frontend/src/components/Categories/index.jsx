import React from "react";

import PropTypes from "prop-types";

import "./index.css";

export default function Categories({ categories }) {
  if (!categories && !categories?.length){
    console.log("null");
    return null;
  } 
  return (
    <div className="flex-wrap" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color + "FF",
              backgroundColor: category.color + "22",
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
}

Categories.prototype = {
  categories: PropTypes.array.isRequired,
};

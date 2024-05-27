import React from "react";
import PropTypes from "prop-types";

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => {
        
          return (
            <span
            key={index}
              className="category-tag rounded-pill p-2 m-1 badge"
              style={{
                backgroundColor: category.color + "33",
                color: category.color
              }}
            >
              {category.title}
            </span>
          );
        
        
      })}
    </div>
  );
}

Categories.propTypes = {
  blogPost: PropTypes.object.isRequired,
};

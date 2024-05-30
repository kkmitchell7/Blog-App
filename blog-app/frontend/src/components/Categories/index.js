import React from "react";
import PropTypes from "prop-types";

export default function Categories({ categories }) {
  if (!categories && !categories?.length) return null;
  return (
    <div className="flex-wrap">
      {categories.map((category, index) => {
        return (
          <p
            key={index}
            className="category-tag"
            style={{
              color: category.color,
              backgroundColor: category.color + "33",
            }}
          >
            {category.title}
          </p>
        );
      })}
    </div>
  );
  }

Categories.propTypes = {
  blogPost: PropTypes.object.isRequired,
};

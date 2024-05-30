import React from "react";
import PropTypes from "prop-types";

import Categories from "../Categories";
import "./index.css";

export default function BlogItemText({ blogPost, headerFontSize, genCategories }) {
      return (
      <div>
        <div style={{ display: "flex" }}>
          <p className="date-author-text">
            implement author here
          </p>
          <div className="dot-divider"></div>
          <p className="date-author-text">
            implement date here
          </p>
        </div>
        <p
          style={{
            fontSize: headerFontSize,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {blogPost.title}
        </p>
        <p style={{ fontSize: "16px", color: "#667085", textAlign: "left" }}>
          {blogPost.description.substring(0, 100)}...
        </p>
        {
          genCategories && (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Categories blogPost={blogPost} />
              </div>
            )
          }
        </div>
      )
}

BlogItemText.propTypes = {
  blogPost: PropTypes.object.isRequired,
  headerFontSize: PropTypes.string,
};
import React from "react";

const data = require("../../dummy-data.json");
const categories = data.categories;

export default function Categories({ blogPost }) {
  return (
    <div className="flex-wrap">
      {blogPost.categories.map((category, index) => {
        const cat = categories.find(cat => cat.title === category);
        if (cat){
          console.log(cat)
          return (
            <span
            key={index}
              className="category-tag rounded-pill p-2 m-1 badge"
              style={{
                backgroundColor: cat.color
              }}
            >
              {cat.title}
            </span>
          );
        } else {
          return;
        }
        
      })}
    </div>
  );
}

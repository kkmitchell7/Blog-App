import React from "react";

import "./index.css";

export default function Heading() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user){
    return (
      <>
        <div className="d-flex justify-content-center my-2">
          <h1 className="border-top border-bottom theBlogTitle"> <strong>The Blog</strong> </h1>
        </div>
        <div className="d-flex justify-content-center my-2">
          <h6 className="greyText">Welcome, {user.firstName}.</h6>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="d-flex justify-content-center my-2">
          <h1 className="border-top border-bottom theBlogTitle"> <strong>The Blog</strong> </h1>
        </div>
        <div className="d-flex justify-content-center my-2">
          <h6 className="greyText">Please Login.</h6>
        </div>
      </>
    )
  }
}

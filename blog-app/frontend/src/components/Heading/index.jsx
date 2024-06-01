import React from "react";

import "./index.css";

export default function Heading({user}) {
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
}

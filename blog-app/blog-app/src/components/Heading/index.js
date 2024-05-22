import React from "react";
import './index.css';

export default function Heading({user}) {
  return (
    <>
      <div className="d-flex justify-content-center my-2">
        <h1 className="display-1 theBlogTitle"> <strong>The Blog</strong> </h1>
      </div>
      <div className="d-flex justify-content-center my-2">
        <h6 className="greyText justify-content-center">Welcome, {user.firstName}.</h6>
      </div>
    </>
  )
}
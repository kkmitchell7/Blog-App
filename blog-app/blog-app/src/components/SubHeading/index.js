import React from "react";
import './index.css';

export default function SubHeading({ subHeading }) {
  return (
    <>
      <div className="d-flex">
      <h5 className="my-2 mx-2"><strong>{subHeading}</strong></h5>
      </div>
    </>
  )
}
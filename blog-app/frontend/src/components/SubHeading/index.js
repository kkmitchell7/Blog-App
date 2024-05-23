import React from "react";
import './index.css';

import PropTypes from 'prop-types'

export default function SubHeading({ subHeading }) {
  return (
    <>
      <div className="d-flex">
      <h5 className="my-2 mx-2"><strong>{subHeading}</strong></h5>
      </div>
    </>
  )
  SubHeading.proptype = {
    subHeading: PropTypes.string.isRequired
  }
}
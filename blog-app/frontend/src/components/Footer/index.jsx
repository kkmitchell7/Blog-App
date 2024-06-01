import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container mt-5">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <div className="d-flex justify-content-center">
            <p className="greyText"> <strong>Need Help?</strong> contact@support.com </p>
            </div>
        </ul>
        <p className="text-center text-muted">&copy; 2024 The Blog App, Inc</p>
      </footer>
    </div>
  );
}

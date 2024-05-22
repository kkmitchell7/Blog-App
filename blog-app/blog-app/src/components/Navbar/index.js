import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={{ margin: "0px 1%" }} className="container-fluid">
        <a className="navbar-brand" href="#">
            <p className="m-0">iX Software Engineering Blog</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex mr-auto navBar">
              <div className="p-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <p className="m-1">Home</p>
                </a>
              </div>
              <div className="p-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <p className="m-1">Categories</p>
                </a>
              </div>
              <div className="p-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <p className="m-1">Blogs</p>
                </a>
              </div>
              <div className="p-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <p className="m-1">About</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
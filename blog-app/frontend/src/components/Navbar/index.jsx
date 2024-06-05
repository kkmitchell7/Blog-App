import React from "react";

import { Link,useNavigate } from "react-router-dom";

export default function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg">
      <div style={{ margin: "0px 1%" }} className="container-fluid">
        <Link className="navbar-brand" to="/home">
          iX Software Engineering Blog
        </Link>
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
                <Link className="nav-link active m-1" aria-current="page" to="/home"> Home</Link>
              </div>
              <div className="p-2">
                <Link className="nav-link active" aria-current="page" to="/categories">
                  <p className="m-1">Categories</p>
                </Link>
              </div>
              <div className="p-2">
                <Link className="nav-link active" aria-current="page" to="/blogs">
                  <p className="m-1">Blogs</p>
                </Link>
              </div>
              {
                user && user.token ? (
                  <li className="nav-item">
                    <div className="dropdown">
                      <button
                        className="btn btn-lg dropdown-toggle p-3"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-person-circle"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            className=" dropdown-item"
                            aria-current="page"
                            to={"/profile/" + user.id}
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            style={{ cursor: "pointer" }}
                            className="dropdown-item"
                            onClick={() => {
                              localStorage.removeItem("user");
                              navigate("/login");
                            }}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : 
                <div className="p-2">
                <Link className="nav-link active" aria-current="page" to="/login">
                  <p className="m-1">Login</p>
                </Link>    
              </div>}

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
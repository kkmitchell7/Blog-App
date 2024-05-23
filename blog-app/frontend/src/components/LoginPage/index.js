import React from "react";

import './index.css';

// Week 1: Import the blogPosts and categories from the dummy-data.json file
const data = require("../../dummy-data.json");
const categories = data.categories;
const user = data.user;



export default function LoginPage() {

    function onSubmit(){
        const registerForm = document.getElementById("registerForm");

        if (registerForm.checkValidity()){
            //TODO create user in database
            const firstName = document.getElementById("floatingFirstName").value;
            const lastName = document.getElementById("floatingLastName").value;
            const bio = document.getElementById("floatingBio").value;
            const email = document.getElementById("floatingEmail").value;
            const password = document.getElementById("floatingPassword").value;

            console.log(firstName, lastName,bio,email,password);
        } else {
            console.log("Form not valid");
        }

        registerForm.classList.add('was-validated');

    }
  return (
            <div className="d-flex vh-100 w-100 justify-content-center align-items-center">
                <div className="col-4">
                    <h1>Login</h1>
                    <form id="registerForm">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required></input>
                            <label for="floatingEmail">Email address</label>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required></input>
                            <label for="floatingPassword">Password</label>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </form>
                    <div className="my-1">
                        <a href={"../register/"}>Register</a>
                    </div>
                    <button type="button" className="btn btn-primary w-100 my-2" onClick={onSubmit}>Login</button>

                </div>
            </div>

  )

}
import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";

import FormImage from "../FormImage";

import {
  setEditUser,
  updateUser
} from "../../features/authSlice";

export default function EditUserModal() {
  const dispatch = useDispatch();


  const modalEl = document.getElementById("addEditModal");
  
  const { editUser } = useSelector((state) => state.auth);

  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState("");

  const addEditModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
      addEditModal.show();
    }
  }, [editUser, addEditModal]);

  const buildFormData = () => {
    console.log(user);
    const formData = new FormData();
    formData.append("id", user._id);
    formData.append("firstName", user.firstName);
    formData.append("image", user.image);
    formData.append("lastName", user.lastName);
    formData.append("bio", user.bio);
    formData.append("email", user.email);
    return formData;
  };
  
  const onSubmit = (e) => {
    e?.preventDefault();
    if (isFormValid()) {
      const userForm = buildFormData();
      if (editUser) {
        dispatch(updateUser(userForm));
      }
      resetUser();
      addEditModal?.hide();
    }
  };
  
  const onImageChange = (e) => {
    if (e?.target?.files?.length) {
      const file = e.target.files[0];
      setUserImage(URL.createObjectURL(file));
      setUser({ ...user, image: file });
    }
  };
  

  const resetUser = () => {
    setUser({
      firstName: "",
      lastName: "",
      bio: "",
      email: "",
      image: ""
    });
  };

  const isFormValid = () => {
    const form = document.getElementById("userForm");
    form?.classList?.add("was-validated");
    return form?.checkValidity();
  };

  const onCloseModal = () => {
    resetUser();
    addEditModal?.hide();
    if (editUser) {
      dispatch(setEditUser(null));
    }
  };


  return (
    <div>
      <div
        className="modal fade"
        id="addEditModal"
        tabindex="-1"
        aria-labelledby="addEditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addEditModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <form id="userForm">
              <FormImage image={userImage} onChange={onImageChange} />
              </form>
              <form id="userForm">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={user?.firstName}
                    onChange={(e) => {
                      setUser({ ...user, firstName: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={user?.lastName}
                    onChange={(e) => {
                      setUser({ ...user, lastName: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Bio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={user?.bio}
                    onChange={(e) => {
                      setUser({ ...user, bio: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={user?.email}
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

EditUserModal.prototype = {
  onClose: PropTypes.func,
};
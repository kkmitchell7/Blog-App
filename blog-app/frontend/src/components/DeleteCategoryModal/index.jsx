import React, { useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "bootstrap";
import PropTypes from "prop-types";

import {
  deleteCategoryByID,
  setDeleteCategory
} from "../../features/categoriesSlice";

export default function DeleteCategoryModal() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState();

  const deleteCategory = useSelector((state) => state.categories.deleteCategory);

  const modalEl = document.getElementById("deleteCategoryModal");
  const deleteCategoryModal = useMemo(() => {
    return modalEl ? new Modal(modalEl) : null;
  }, [modalEl]);

  useEffect(() => {
    if (deleteCategory) {
      setCategory(deleteCategory);
      deleteCategoryModal?.show();
    }
  }, [deleteCategory, deleteCategoryModal]);

  const resetCategory = () => {
    setCategory({
      title: "",
      description: "",
      color: "#000000",
    });
  };

  const onCloseModal = () => {
    resetCategory();
    dispatch(setDeleteCategory(null));
    deleteCategoryModal?.hide();
  };

  const onDelete = () => {
    console.log(deleteCategory)
    dispatch(deleteCategoryByID(deleteCategory.id));
    resetCategory();
    deleteCategoryModal?.hide();
    window.location.reload();
  };

  return (
    <div
      className="modal fade"
      id="deleteCategoryModal"
      aria-labelledby="deleteCategoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteCategoryModalLabel">
              Delete Category
            </h1>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>Are You sure you want to delete this Category?</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{ marginLeft: "8px" }}>{category?.title}</h5>
            </div>
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
              className="btn btn-outline-danger"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteCategoryModal.prototype = {
  deleteCategory: PropTypes.object,
  removeCategory: PropTypes.func.isRequired,
};

const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.post("/", (req, res) => {
  createCategory(req, res);
});

router.get("/", (req, res) => {
  getCategories(req, res);
});

router.get("/:id", (req, res) => {
  getCategory(req, res);
});

router.put("/:id", (req, res) => {
  updateCategory(req, res);
});

router.delete("/:id", (req, res) => {
  deleteCategory(req, res);
});

module.exports = router;
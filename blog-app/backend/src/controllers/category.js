const Category = require("../models/Category")

const createCategory = async (req, res) => {
  try {
    const category = new Category({
      title: req.body.title,
      description: req.body.description,
      color: req.body.color
    });
    const newCategory = await category.save();
    res.status(201).json({ message: "New category created!", data: newCategory });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

  
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: "Return all categories!", data: categories });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.status(200).json({ message: "Return category by ID!", data: category });
    } else {
      res.status(404).json({ message: "Category not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};
  
const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.authorId = req.body.authorId || category.authorId;
      category.categoryId = req.body.categoryId || category.categoryId;
      category.title = req.body.title || category.title;
      category.description = req.body.description || category.description;
      category.image = req.body.image || category.image;
      category.content = req.body.content || category.content;
      const updatedCategory = await category.save();
      res.status(200).json({ message: "Category updated!", data: updatedCategory });
    } else {
      res.status(404).json({ message: "Category not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};
  
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      return res.status(200).json({ message: "Category deleted!" });
    } else {
      return res.status(404).json({ message: "Category not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
  
  module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
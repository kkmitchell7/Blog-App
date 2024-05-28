const createCategory = (req, res) => {
    res.status(200).json({ message: "Create new Category!", data: [] });
  };
  
  const getCategories = (req, res) => {
    res.status(200).json({ message: "Return all Categorys!", data: [] });
  };
  
  const getCategory = (req, res) => {
    res.status(200).json({ message: "Return Category by ID!", data: [] });
  };
  
  const updateCategory = (req, res) => {
    res.status(200).json({ message: "Update Category by ID!", data: [] });
  };
  
  const deleteCategory = (req, res) => {
    res.status(200).json({ message: "Delete Category by ID!", data: [] });
  };
  
  module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
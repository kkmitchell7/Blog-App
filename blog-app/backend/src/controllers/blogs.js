const Blog = require("../models/Blog");

const createBlogs = async (req, res) => {
  try {
    console.log(req.body);
  
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      image: req?.file?.path
        ? req?.protocol + "://" + req?.headers?.host + "/" + req.file.path
        : "",
      content: JSON.parse(req.body.content),
      authorId: req.body.authorId,
      categoryIds: JSON.parse(req?.body?.categories).map((x) => x.id),
    });
    console.log(blog.title);
    const newBlog = await blog.save();

    const blogRes = await Blog.findById(newBlog._id).populate({
      path: "categoryIds",
    })
    .populate({path:"authorId"});

    res.status(200).json({
      message: "Blog created!",
      data: blogRes,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: {} });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate({ path: "categoryIds" }).populate({path:"authorId"});
    res.status(200);
    res.json({
      message: "Get all blogs!",
      data: blogs,
    });
  } catch (err) {
    res.status(500);
    res.json({ message: error.message, data: {} });
  }
};

const getBlogById = async (req, res) => {
  try {
    //console.log(req.params.id);
    const blog = await Blog.findById(req.params.id).populate({
      path: "categoryIds",
    }).populate({path:"authorId"});
    if (blog) {
      res.status(200).json({ message: "Return blog by ID!", data: blog });
    } else {
      res.status(404).json({ message: "Blog not found!", data: {} });
    }
  } catch (err) {
    res.status(500).json({ message: error.message, data: {} });
  }
};

const getBlogsByCategoryID = async (req, res) => {
  try {
    //console.log(req.params.id);
    let filter = {};
    if (req.params.id != "null" && req.params.id != "undefined") {
      filter = { categoryIds: req.params.id };
    }
    const blogs = await Blog.find(filter).populate({
      path: "categoryIds",
    }).populate({path:"authorId"});
    res.status(200).json({
      message: "Get blogs by categoryID!",
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({ message: error.message, data: {} });
  }
};

const updateBlogByID = async (req, res) => {
  console.log(req.body);
  try {
    const blog = await Blog.findById(req.params.id)
      .populate({
        path: "categoryIds",
      })
      .populate({ path: "authorId" });
    if (blog) {
      const categoryIds = JSON.parse(req?.body?.categories).map((x) => x.id);
      blog.authorId = req?.body?.authorId || blog.authorId;
      blog.categoryIds = categoryIds ? categoryIds : blog.categoryIds;
      (blog.image = req?.file?.path
        ? req?.protocol + "://" + req?.headers?.host + "/" + req.file.path
        : blog.image),
        (blog.title = req?.body?.title || blog.title);
      blog.description = req?.body?.description || blog.description;
      blog.content = req.body.content ? JSON.parse(req.body.content) : blog.content;
      const updatedBlog = await blog.save();
      const blogRes = await updatedBlog.populate({
        path: "categoryIds",
      });
      res.status(200).json({ message: "Blog updated!", data: blogRes });
    } else {
      res.status(404).json({ message: "Blog not found!", data: [] });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, data: {} });
  }
};

const deleteBlogByID = async (req, res) => {
  console.log(req)
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (blog) {
      return res
        .status(200)
        .json({ message: "Blog deleted!", id: req.params.id });
    } else {
      return res.status(404).json({ message: "Blog not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getBlogsByAuthorID = async (req, res) => {
  try {
    console.log(req.params.id);
    let filter = {};
    if (req.params.id != "null" && req.params.id != "undefined") {
      filter = { authorId: req.params.id };
    }
    const blogs = await Blog.find(filter)
      .populate({
        path: "categoryIds",
      })
      .populate({ path: "authorId" });
    res.status(200).json({
      message: "Get blogs by authorID!",
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({ message: error.message, data: {} });
  }
};


const blogController = {
  createBlogs,
  getBlogs,
  getBlogById,
  getBlogsByCategoryID,
  getBlogsByAuthorID,
  updateBlogByID,
  deleteBlogByID,
};

module.exports = blogController;

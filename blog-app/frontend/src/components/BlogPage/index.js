import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import './index.css';

import Heading from "../Heading";
import Navbar from "../Navbar";
import Loading from "../Loading";
import BlogGridInline from "../BlogGridInline";
import Footer from "../Footer";
import SuccessToast from "../../services/SuccessToast";
import ErrorToast from "../../services/ErrorToast";
import AddEditBlogModal from "../../components/AddEditBlogModal";


import blogService from "../../services/blogService";
import categoryService from "../../services/categoryService";

//need to fix to be database
const data = require("../../dummy-data.json");
const user = data.user;

export default function BlogPage() {
  const { categoryId } = useParams();
  const { setEditBlog } = useParams(false);
  const { setDeleteBlog } = useParams(false);
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();
  const [addBlog, setAddBlog] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  //Fetch all data
  const fetchAllBlogs = async () => {
    try{
      setLoading(true);
      const blogsRes = await blogService.fetchBlogs();
      setBlogs(blogsRes.data);
      setLoading(false);
    } catch(error){
      setIsError(true);
      setMessage(error.message)
      setLoading(false);
    }
  }
  const fetchFilteredData = async () => {
    const blogsRes = await blogService.fetchBlogById(categoryId);
    setBlogs(blogsRes.data);
    setLoading(false);
  };

  const fetchAllCats = async () => {
    try {
      const categoriesRes = await categoryService.fetchCategories();
      setCategories(categoriesRes.data);
    } catch(error){
      setMessage(error.message)
    }
  }

  useEffect(() => {
    if (categoryId){
      fetchFilteredData();
    } else {
      fetchAllBlogs();
    }
    fetchAllCats();

  }, [categoryId]);


  //End fetch all Data

  //Helper Functions

  const onBlogAddClick = () => {
    setAddBlog({
      title: "",
      description: "",
      categories: [],
      author: {
        id: 1,
        firstName: "Byron",
        lastName: "de Villiers",
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image:
          "data:image/png;base64,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",
      },
      content: [
        {
          sectionHeader: "Introduction",
          sectionText:
            "I'm so excited to share my first blog post with the world. I've been working on this for a while and I'm happy to finally share it with you.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    });
  };

  const createBlogPost = async (blog) => {
    try {
      const newBlog = await blogService.createBlog(blog);
      setIsSuccess(true);
      setMessage(newBlog.message);
      setBlogs((prev) => {
        if (newBlog.data.categories.some((x) => x.id === categoryId)) {
          prev?.unshift(newBlog.data);
        }
        return prev;
      });
    } catch (err) {
      setIsError(true);
      setMessage(err);
    }
    setAddBlog(null);
  };


  const CategoriesListFilter = ({ categoryId }) => {
    
    if (!categories && !categories?.length) {
      return null;
    }

    return(
      <>
      <Link
          className="link"
          key={0}
          to={"/blogs"}
          style={{ color: "black" }}
          onClick={() => null}
        >
          <p key={0}>All</p>
        </Link>
        { categories.map((category) => {
      return categoryId === category.id ? (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
          onClick={() => null}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      ) : (
        <Link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
          onClick={() => null}
        >
          <p key={category.id}>{category.title}</p>
        </Link>
      );
    } 
    )
    }
    </> )
  };
  

  //Render

  if (isLoading) {
    return <Loading />;
  }
  return (
      <>
        <Navbar />
        <div className="container">
          <Heading user={user} />
          <div className="scroll-menu">
            <CategoriesListFilter categoryId={categoryId} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="page-subtitle">Blog Posts</p>
            <button
              className="btn btn-outline-dark h-75"
              onClick={onBlogAddClick}
            >
              ADD BLOG
            </button>
          </div>
          <BlogGridInline blogPosts={blogs} onEdit={setEditBlog} onDelete={setDeleteBlog} />
          <AddEditBlogModal
          categories={categories}
          addBlog={addBlog}
          createBlogPost={createBlogPost}
          />
        </div>
  
        <Footer />
        <SuccessToast
        show={isSuccess}
        message={message}
        onClose={() => {
          setIsSuccess(false);
        }}
        />

        <ErrorToast
          show={isError}
          message={message}
          onClose={() => {
            setIsError(false);
          }}
        />
      </>
    );

}
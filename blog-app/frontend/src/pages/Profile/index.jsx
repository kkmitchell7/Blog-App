import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import AddEditBlogModal from "../../components/AddEditBlogModal";
import DeleteBlogModal from "../../components/DeleteBlogModal";
import EditUserModal from "../../components/EditUserModal";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import EditButtons from "../../components/EditButtons";

import blogService from "../../services/blogService";
import authService from "../../services/authService";

import {
  setEditUser as onAuthorEdit 
} from "../../features/authSlice";

export default function ProfilePage() {
  const { authorId } = useParams();

  const dispatch = useDispatch();

  const [author, setAuthor] = useState();
  const [blogs, setBlogs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    user,
  } = useSelector((state) => state.auth);


  useEffect(() => {
    const fetchAuthorBlogs = async () => {
      try {
        setIsLoading(true);
        const author = await authService.getUser(authorId);
        const blogsRes = await blogService.fetchBlogsByAuthorId(authorId);
        setBlogs(blogsRes.data);
        setAuthor(author.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        setMessage(error.message || error);
      }
    };
    fetchAuthorBlogs();
  }, [authorId]);


  const resetSuccess = () => {
    setIsSuccess(false);
    setMessage("");
  };

  const resetError = () => {
    setIsError(false);
    setMessage("");
  };

  const EditButtonsContainer = () => {
    return (
      <EditButtons
        onEdit={() => dispatch(onAuthorEdit(user))}
      />
    );
  };

  const AuthorDetails = () => {
    return (
      <div className="col-md-8 col-lg-6 col-xl-4 mx-auto">
        <div className="position-sticky my-5" style={{ top: "2rem" }}>
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic">
              {author.firstName} {author.lastName}
            </h4>
            <img src={author.image} className="avatar" alt="..." />
            <p>{author.bio.substring(0, 100)}...</p>
            {user && user.token && onAuthorEdit && user._id == authorId ? (
            <EditButtonsContainer />
          ) : null}
          </div>
        </div>
      </div>
    );
  };

  if (isLoading || !author || !blogs) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <AuthorDetails />
        <p className="page-subtitle">Author Blog Posts</p>
        <BlogList blogPosts={blogs} />
        <Footer />
      </div>
      <EditUserModal />
      <AddEditBlogModal />
      <DeleteBlogModal />
      <SuccessToast show={isSuccess} message={message} onClose={resetSuccess} />
      <ErrorToast show={isError} message={message} onClose={resetError} />
    </>
  );
}
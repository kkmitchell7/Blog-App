import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";

//import renderHomePage from './components/renderHomePage.jsx'
//import renderBlogsPage from './components/renderBlogsPage.jsx'
//import renderCategoriesPage from './components/renderCategoriesPage.jsx'

import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import CategoriesPage from "./components/CategoriesPage";
import IBlogPage from "./components/IndivBlogPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/blogs/",
    element: <BlogPage />,
  },
  {
    path: "/blog/:blogId",
    element: <IBlogPage />,
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />;

    </div>
  );
}

export default App;

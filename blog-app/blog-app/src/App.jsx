import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";

import renderHomePage from './components/renderHomePage.jsx'
import renderBlogsPage from './components/renderBlogsPage.jsx'
import renderCategoriesPage from './components/renderCategoriesPage.jsx'

import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import CategoriesPage from "./components/CategoriesPage";

function App() {
  
  
  const onSubmit = () => {
    console.log("submited")
  }

  return (
    <div className="App">
      <HomePage />

    </div>
  );
  //renderCategoriesPage();
}

export default App;

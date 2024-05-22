import './categories.css';
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
    {
      id: 1,
      title: "Web Development",
      description: "Covers all things about developing the Web.",
      color: "Green"
    },
    {
        id: 2,
        title: "OOP",
        description: "Object Oriented Programming languages and basics.",
        color: "Pink"
    },
    {
        id: 3,
        title: "Python",
        description: "Python is a coding language.",
        color: "Purple"
    },
    {
        id: 4,
        title: "Java",
        description: "Java is a coding language.",
        color: "Purple"
    },
    {
        id: 5,
        title: "Node.js",
        description: "Node.js is a framework for building web apps.",
        color: "Pink"
    },
    {
        id: 6,
        title: "Projects",
        description: "Coding and technology projects.",
        color: "Green"
    },
    {
        id: 7,
        title: "Backend",
        description: "All things backend, including databases and APIs.",
        color: "Blue"
    },
    {
        id: 8,
        title: "Basics",
        description: "Beginner friendly ideas and posts.",
        color: "Yellow"
    }
    ]


    
    function renderCategoriesPage(){
        return (
            <div>  
            <div className="d-flex justify-content-between w-10">
              <div className="p-2">
                <p className="m-1">iX Software Engineering Blog</p>
              </div>
              <div class="d-flex mr-auto navBar">
                <div className="p-2">
                  <a href="https://Google.com">
                    <p className="m-1">Home</p>
                  </a>
                </div>
                <div className="p-2">
                  <a href="https://Google.com">
                    <p className="m-1">Categories</p>
                  </a>
                </div>
                <div className="p-2">
                  <a href="https://Google.com">
                    <p className="m-1">Blogs</p>
                  </a>
                </div>
                <div className="p-2">
                  <a href="https://Google.com">
                    <p className="m-1">About</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center my-2">
              <h1 className="display-1 theBlogTitle"> <strong>The Blog</strong> </h1>
            </div>
            <div>
              <h5 className="my-2 mx-2"><strong>Categories</strong></h5>
            </div>   
      
          <div className="p-3 row">
          {
              categories.map((category)=> {
                  return (
                  <div className="p-2 medBlog col-md-2">
                    <div className={`${category.color} p-1 mb-2`}>
                        <h5 className="my-2 mx-2 categoryTitle">{category.title}</h5>
                    </div>
                    <p className="categoryDes">{category.description}</p>
                  </div>
                  )
                  }
                  )
          }
          </div>
          </div>
              )
    }
export default renderCategoriesPage;
        
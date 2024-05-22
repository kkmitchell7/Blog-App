import './blogs.css';
import "bootstrap/dist/css/bootstrap.min.css";

const user = {
    firstName:"Kailen",
    lastName:"Mitchell",
    email: "kailen@gmail.com",
    bio: "a girl",
    autheticated: true
}

const blogs = [
{
  id: 1,
  title: "Learning JS",
  author: user,
  date: "05-22-24",
  categories: ["Web Development", "Javascript"],
  description: "This is an article about learning Javascript."
},
{
  id: 2,
  title: "Learning Java",
  author: user,
  date: "05-22-24",
  categories: ["OOP", "Java"],
  description: "This is an article about learning Java."
},
{
  id: 3,
  title: "Learning Python",
  author: user,
  date: "05-22-24",
  categories: ["OOP", "Python"],
  description: "This is an article about learning Python."
},
{
  id: 4,
  title: "Learning Node.js",
  author: user,
  date: "05-22-24",
  categories: ["Web Development", "Node.js"],
  description: "This is an article about learning Node.js."
},
{
  id: 5,
  title: "Fun Project Ideas",
  author: user,
  date: "05-22-24",
  categories: ["Projects", "Python"],
  description: "This is an article about fun project ideas."
}
]

let firstBlog = true;
function renderBlogsPage(){
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
              <h5 className="my-2 mx-2"><strong>Blog Posts</strong></h5>
            </div>   
      
          <div className="p-4 row">
          {
              blogs.map((blog)=> {
                  return (
                  <div className="p-3 medBlog col-md-4">
                      <img src={`${process.env.PUBLIC_URL}/notLoaded.png`}></img>
                      <p className="greyText">{blog.date} • {blog.author.firstName} {blog.author.lastName}</p>
                      <h5 className="my-2">{blog.title}</h5>
                      <p>{blog.description}</p>
                      <div className="d-flex flex-row">
                      {
                          blog.categories.map((category)=> {
                          return(
                              <div className="p-1">
                              <span className="badge rounded-pill text-bg-info">{category}</span>
                              </div>
                          )
                          })
                      }
                      </div>
                      
                  </div>
                  )
                  }
                  )
          }
          </div>
          </div>
          )
}
    
export default renderBlogsPage;
import './homePage.css';
import "bootstrap/dist/css/bootstrap.min.css";


let user = {
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

function renderHomePage(){
    user.autheticated = true;
    return(
        <div>
        {user.autheticated ? (
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
          <div className="d-flex justify-content-center">
            <h6 className="greyText">Welcome, {user.firstName}.</h6>
          </div>
          <div>
            <h5 className="my-2 mx-2"><strong>Recent Blog Posts</strong></h5>
          </div>   
          <div className="d-flex flex-row mx-3 vh-100 w-100">
            <div className="p-2 row-span-2 bigBlog">
              <img src={`${process.env.PUBLIC_URL}/notLoaded.png`}></img>
              <p className="greyText">{blogs[0].date} • {blogs[0].author.firstName} {blogs[0].author.lastName}</p>
              <h5 className="my-2">{blogs[0].title}</h5>
              <p>{blogs[0].description}</p>
              <div className="d-flex flex-row">
                {
                  blogs[0].categories.map((category)=> {
                  return(
                    <div className="p-1">
                       <span className="badge rounded-pill text-bg-info">{category}</span>
                    </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="d-flex flex-column flex-shrink-1">
                <div className="p-2 smallBlog">
                    <img src={`${process.env.PUBLIC_URL}/notLoaded.png`}></img>
                    <p className="greyText mb-1">{blogs[1].date} • {blogs[1].author.firstName} {blogs[1].author.lastName}</p>
                    <h5 className="mb-1">{blogs[1].title}</h5>
                    <p className="mb-0">{blogs[1].description}</p>
                    <div className="d-flex flex-row">
                    {
                      blogs[1].categories.map((category)=> {
                      return(
                        <div className="p-1">
                          <span className="badge rounded-pill text-bg-info">{category}</span>
                        </div>
                      )
                      })
                    }
                    </div>    
                </div>
                <div className="p-2 smallBlog">
                    <img src={`${process.env.PUBLIC_URL}/notLoaded.png`}></img>
                    <p className="greyText mb-1">{blogs[2].date} • {blogs[2].author.firstName} {blogs[2].author.lastName}</p>
                    <h5 className="mb-1">{blogs[2].title}</h5>
                    <p className="mb-0">{blogs[1].description}</p>
                    <div className="d-flex flex-row">
                    {
                      blogs[2].categories.map((category)=> {
                      return(
                        <div className="p-1">
                          <span className="badge rounded-pill text-bg-info">{category}</span>
                        </div>
                      )
                      })
                    }
                    </div>    
                </div>
              </div>
            <div className="d-flex flex-column flex-shrink-1">
            <div className="p-2 smallBlog">
                    <img src={`${process.env.PUBLIC_URL}/notLoaded.png`}></img>
                    <p className="greyText mb-1">{blogs[3].date} • {blogs[3].author.firstName} {blogs[3].author.lastName}</p>
                    <h5 className="mb-1">{blogs[3].title}</h5>
                    <p className="mb-0">{blogs[3].description}</p>
                    <div className="d-flex flex-row">
                    {
                      blogs[3].categories.map((category)=> {
                      return(
                        <div className="p-1">
                          <span className="badge rounded-pill text-bg-info">{category}</span>
                        </div>
                      )
                      })
                    }
                    </div>    
                </div>
                <div className="p-2 smallBlog">
                    <img src={`${process.env.PUBLIC_URL}/notLoaded.png`}></img>
                    <p className="greyText mb-1">{blogs[4].date} • {blogs[4].author.firstName} {blogs[4].author.lastName}</p>
                    <h5 className="mb-1">{blogs[4].title}</h5>
                    <p className="mb-0">{blogs[4].description}</p>
                    <div className="d-flex flex-row">
                    {
                      blogs[4].categories.map((category)=> {
                      return(
                        <div className="p-1">
                          <span className="badge rounded-pill text-bg-info">{category}</span>
                        </div>
                      )
                      })
                    }
                  </div>  
            </div>
            </div>
          </div>   
        </div>) : 
        (<div>
          <h1> Please login</h1>
          <h5>{user.firstName}</h5>
        </div>
        )}
    </div>
    )
};

export default renderHomePage;
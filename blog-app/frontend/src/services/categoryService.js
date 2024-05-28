
const getCategories= async() =>{
    try{
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",{
        method: "GET",
        hearers: {
            "Content-Type":"application/json"
        }
        })
        const categoryApiData = await data.json();
        console.log(categoryApiData.message)
        return categoryApiData.data;
    } catch(error){
        throw new Error(error);
    }
    }

const getCategoriesbyID= async(categoryId) =>{
    try{
        const data = await fetch(`https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs/category/[categoryId]`,{
        method: "GET",
        hearers: {
            "Content-Type":"application/json"
        }
        })
        const categoryApiData = await data.json();
        console.log(categoryApiData.message)
        return categoryApiData.data;
    } catch(error){
        throw new Error(error);
    }
    }

const categoryService = {
    getCategories,getCategoriesbyID
}

export default categoryService;
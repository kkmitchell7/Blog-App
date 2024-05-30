const express = require("express");
const cors = require("cors");
require("dotenv").config()

const connectDB = require("./database/db");
connectDB();

const port =  process.env.PORT || 8000;

const blogRoutes = require("./routes/blogRoutes")
const categoryRoutes = require("./routes/categoryRoutes")

const app = express();

// Enabling CORS for any unknown origin
app.use(cors()); //app.use is middleware

app.use(express.json());

app.use("/api/blogs", blogRoutes) //blogs is a prefix to all of the blogRoutes

app.use("/api/categories", categoryRoutes) 

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});
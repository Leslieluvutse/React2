import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "./BlogList";
const Blogs =()=>{
const  [blogs, setBlogs]= useState (null);
 
useEffect(() => {
   axios.get('http://localhost:4000/blogs')
      .then(res =>{setBlogs()});
},[])


return(
<div>
   {blogs && <BlogList blogs = {blogs} />}
</div>
)
}
export default Blogs;
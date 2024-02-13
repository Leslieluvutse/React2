import React, { useEffect, useState } from "react";
import axios from "axios";
const Home =()=>{
const  [blogs, setBlogs]= useState (null);
 
useEffect(() => {

              axios.get('http://localhost:4000/blogs')
},[])

.then(res =>{setBlogs()});

   return(
              <div className="home">
               {blogs.map((blog) =>(
                            <div className="preview" key={blog.id}>
                                          <h3>{blog.title}</h3>
                                          <p>Written by: {blog.author}</p>
                                          <p>blog.body</p>
                            </div>
               ))}
              </div>
   );
               }
export default Home;
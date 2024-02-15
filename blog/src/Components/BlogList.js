import React from "react";
const BlogList = (props) => {
const blogs = props.blogs;
const title = props.title;
return(
              <div className="blog-list">
              <h2>{ title }</h2>
               {blogs.map((blog) =>(
                            <div className="blog-preview" key={blog.id}>
                                          <h3>{blog.title}</h3>
                                          <p>Written by: {blog.author}</p>
                            
                            </div>
               ))}
              </div>
);
               }
 export default BlogList              
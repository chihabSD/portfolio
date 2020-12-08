import React from "react";
import blogs from "../Blogs/Blogs";

function BlogsContainer() {
  return (
    <div className="section blogs" id="example">
      <h1>Blogs</h1>
      <div className="project-inner">
        <div className="all">
          {blogs.blogs.map((blog, id) => (
            <div className="item-card card-blog" key={id}>
              {/* {blog.title} */}
           
                <img
                  src={blog.img}
                  alt=""
                  style={{ width: "100%", height: "70%" }}
                />
              
              <div class="blog-details">
                <h6 style={{fontSize: "1rem", color: "rgb(8, 169, 197)"}}>{blog.date}</h6>
                <h3 style={{fontSize: "1.5rem", color:"blue"}}>{blog.title}</h3>
              </div>
            </div>
          ))}

          {/* {blogs.blogs.map((blog, id) => (
              <div className="item-card">{blog.title}</div>
            ))} */}
        </div>
      </div>
    </div>
  );
}

export default BlogsContainer;

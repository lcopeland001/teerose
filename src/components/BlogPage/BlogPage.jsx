import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function BlogPage() {
  const blogPost = useSelector(store => store.blogPost);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlog();
  })
  
  const fetchBlog = () => {
    dispatch({ type: 'FETCH_BLOG' });
  }
  
  return (
    <div className="container">
      <div>
        <p>Blogs</p>
        <pre>{JSON.stringify(blogPost)}</pre>
        {/* <h1>Author ID: {blogPost.id}</h1> */}

                    {/* {
                blogPost.map(blog => {
                    return <div key={blog.id}>{blog.name}</div>
                })
            } */}
      </div>
    </div>
  );
}

export default BlogPage;
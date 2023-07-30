import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


function BlogPage() {
  const blogPost = useSelector((store) => store.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    // fetchBlog();
    dispatch({ type: 'FETCH_BLOG' });
  }, []);
  
  // const fetchBlog = () => {
  //   dispatch({ type: 'FETCH_BLOG' });
  // }
  
  return (
    <div className="container">
        {/* <pre>{JSON.stringify(blogPost)}</pre> */}

        <h1>Blogs</h1>
          {blogPost.map(blog => {
            return (
              <>
                <p>Title: {blog.date}</p>
                <p>Author Name: {blog.author_first_name} {blog.author_last_name}</p>
                <p>Date: {blog.date}</p>
                <p>Blog: {blog.post} </p>
              </>
            );
          })}
    </div>
  );
}

export default BlogPage;
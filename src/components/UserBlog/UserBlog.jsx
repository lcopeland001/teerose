import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory, useParams, Link  } from 'react-router-dom';

function UserBlog() {
  const blogPost = useSelector((store) => store.blog);
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  // const { blogId } = useParams();

  // useEffect(() => {
  //   dispatch({
  //     type: 'FETCH_BLOG_DETAILS',
  //     payload: blogId
  //   });
  // }, [blogId]);
  
  const deleteBlog = (blogId) => {
    confirm('Are you sure you want to delete this Blog? ');
    if (true){
      dispatch({ 
        type: 'DELETE_BLOG',
        payload: blogId 
      });
    }  
  }
  
  return (
    <div className="container">
        {/* <pre>{JSON.stringify(blogPost)}</pre> */}

        <h1>User Blogs</h1>
        <>
          {blogPost.map(blog => {
            return (
              <>
                <Link to="/blogform">Add Blog</Link>
                <p>Title: {blog.date}</p>
                <p>Author Name: {blog.author_first_name} {blog.author_last_name}</p>
                <p>Date: {blog.date}</p>
                <p>Blog: {blog.post} </p>
                <button onClick={() => deleteBlog(blog.id)}>Delete</button>
              </>
            );
          })}
          </>
    </div>
  );
}

export default UserBlog;
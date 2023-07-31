import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BlogForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [author_first_name, setAuthorFirstName] = useState('');
  const [author_last_name, setAuthorLastName] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const { id } = useParams();
  const { user_id } = useParams();

  const addBlog = () => {
    if (id) { // Return false if id is undefined 
      axios.get(`/api/blog/${id}`).then(response => {
        const blog = response.data;
        setAuthorFirstName(blog.author_first_name);
        setAuthorLastName(blog.author_last_name);
        setDate(blog.date);
        setTitle(blog.title);
        setPost(blog.post);
      }).catch(error => {
        console.log('Error post property', error);
        alert('Something went wrong adding blog');
        })
      } 
    }

  useEffect(() =>{
    addBlog();
  }, [id]);

  const submitForm = (e) => {
    e.preventDefault();
    if(id) {
      dispatch({ 
        type: 'EDIT_BLOG', 
        payload: { author_first_name, author_last_name, date, title, post, id, user_id }, history })
    } else {
      dispatch({ 
        type: 'ADD_BLOG',
        payload: { author_first_name, author_last_name, date, title, post }, history });
    }
  }

  return (
    <div className="container">
      <p>Blog Form</p>
      <form>
        <p>
          Author First Name:
          <input value={author_first_name} onChange={(e) => setAuthorFirstName(e.target.value)} />
        </p>
        <p>
          Author Last Name:
          <input value={author_last_name} onChange={(e) => setAuthorLastName(e.target.value)} />
        </p>
        <p>
          Date:
          <input value={date} onChange={(e) => setDate(e.target.value)} />
        </p>
        <p>
          Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          Post:
          <input value={post} onChange={(e) => setPost(e.target.value)} />
        </p>
      </form>
    </div>
  );
}

export default BlogForm;

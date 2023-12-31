import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom-v5-compat';

function BlogForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

<<<<<<< HEAD
=======

>>>>>>> f3f9e8a2181f03e8634476eb48504f0b27930cfb
  const [author_first_name, setAuthorFirstName] = useState('');
  const [author_last_name, setAuthorLastName] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const { id } = useParams();
  const { user_id } = useParams();

  useEffect(() =>{
    addBlog();
  }, [id]);

  const returnHomeButton = () => {
    history.push(`/home`) 
    }

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
        console.log('Error', error);
        alert('Something went wrong adding blog');
        })
      } 
    }

  const submitForm = (e) => {
    e.preventDefault();
    if(id) {
      dispatch({ 
        type: 'EDIT_BLOG', 
<<<<<<< HEAD
        payload: { author_first_name, author_last_name, date, title, post, id, user_id } });
        history.push(`/user`);
    } else {
      dispatch({ 
        type: 'ADD_BLOG',
        payload: { author_first_name, author_last_name, date, title, post } });
        history.push(`/user`);
=======
        payload: { author_first_name, author_last_name, date, title, post, id, user_id }, navigate })
    } else {
      dispatch({ 
        type: 'ADD_BLOG',
        payload: { author_first_name, author_last_name, date, title, post }, navigate });
>>>>>>> f3f9e8a2181f03e8634476eb48504f0b27930cfb
    }
  }
  return (
    <div className="container">
      <h1>Blog Form</h1>
      <form onSubmit={submitForm}>
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
        <input type="submit"/>
      </form>

  <button onClick={returnHomeButton}>Return To Home</button>

    </div>
  );
}

export default BlogForm;

import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Roses Make Life Sweet</h2>
      </Link>
      
      <div>
        
{/* If no user is logged in, show these links */}

        {/* {!user.id && (
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}

{/* Show these links, logged in or not */}
       
        <Link className="navLink" to="/home">
          Home
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>

        <Link className="navLink" to="/blog">
          Blog
        </Link>

        <Link className="navLink" to="/social">
          Socials
        </Link>

 {/* If a user is logged in, show these links */}
       
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              User
            </Link>

            <Link className="navLink" to="/addblog">
              Add Blog
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;

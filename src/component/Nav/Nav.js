import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav(props) {
    console.log('nav, location',props.pathname)
    if(!(props.pathname === '/')){

        return (
            <div>
            Nav
            <Link to="/dashboard">Home</Link>
            <Link to='/post/:postid'>New Post</Link>
            <Link to="/auth">Logout</Link>
            </div>
        )
    }
}
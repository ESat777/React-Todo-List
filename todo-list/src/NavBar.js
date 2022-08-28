import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
// import TodoApp from './Components/TodoApp';
// import Home from './Home';

function NavBar() {
  return (
    <nav>
        <Link className='link' to="/"><img className='logo' src={logo} height={60} width={60} alt='Logo'/></Link>
        <ul className='nav-link'>
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/todo">Todo</Link>
            <Link className='link' to="/about">About</Link>
        </ul>
    </nav>
  )
}

export default NavBar
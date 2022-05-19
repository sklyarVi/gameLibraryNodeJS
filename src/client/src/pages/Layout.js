import React  from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo"> 
            <i className='material-icons-outlined left'> sports_esports </i>
              GameLibrary
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/users">Users</Link>       </li>
            <li> <Link to="/games"> Games </Link>  </li>
            <li> <Link to="/contact">Contact</Link>  </li>
          </ul>
        </div>
      </nav>
        
      <Outlet />
    </>
  )
};

export default Layout;

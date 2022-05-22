import React, {useEffect}  from 'react';
import {Outlet, Link, useLocation} from "react-router-dom";
//import {useContext} from './pages/UserContext';

const ADMIN_PATHS = '/admin'

const Layout = () => {
    const loc = useLocation();

    async function getToken() {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token');

        const result = await fetch("http://localhost:5555/users/login", {
            headers: {
                authorization: token
            }
        })

        const data = await result.json();
        const isAdmin = data.isAdmin;

        if(!isAdmin && ADMIN_PATHS.indexOf(loc.pathname) !== -1) {
            //Redirect - nie ma dostępu
            //Czesciowy dsotep - useContext hook
        }
    }

    useEffect(() => {
        getToken()
    })

    return (
      <>
        <nav className='left-align'>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              <i className='material-icons-outlined medium left'> sports_esports </i>
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

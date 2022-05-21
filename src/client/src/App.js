import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import 'materialize-css';
import './style.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import ViewGame from "./pages/ViewGame";
import GetGame from "./pages/GetGame";
import DelGame from "./pages/DelGame";
import UpdateGame from './pages/UpdateGame';
import AddGame from './pages/AddGame';
import Footer from './pages/Footer';
import Login from './pages/Login'
//import 'material-design-icons/iconfont/material-icons.css';

function App() {
  const [ data, setData ] = useState(null);
  function getName(id) {
    setData(id);
  }
  return (
      <div className='center'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={ <Home />} />
              <Route path="login" element={<Login/>}/>
              <Route path="users" element={<Users />} />
              <Route path="games" element={<GetGame getData={getName}/>} />
              <Route path="/game/:id" element={<ViewGame data={data}/>} />
              <Route path="/game/update/:id" element={<UpdateGame data={data}/>} />
              <Route path="/game/add" element={<AddGame/>} />
              <Route path="/game/del/:id" element={<DelGame data={data}/>} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
  );

}

export default App;
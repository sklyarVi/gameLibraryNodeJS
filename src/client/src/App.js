import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
//import 'material-design-icons/iconfont/material-icons.css';

function App() {

  const [ data, setData ] = useState(null);
  
  function getName(id) {
    setData(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="games" element={<GetGame getData={getName}/>} />
          <Route path="/game/:id" element={<ViewGame data={data}/>} />
          <Route path="/game/del/:id" element={<DelGame data={data}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
import React from 'react'
import Routers from './Router';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './Menu';

export default function App() {
  return (
      <div className="">
        <Router>
          <Menu/>
          <Routers/>
        </Router>
        
      </div>
  );
}


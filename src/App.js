// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { Team } from "./Team";
import Portfolio from "./Portfolio";
import {Summit} from "./Summit"
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      
      <Route exact path="/" Component={Home} />
      <Route path="/team" Component={Team}/>
      <Route path="/portfolio" Component={Portfolio}/>
      <Route path="/summit" Component={Summit}/>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;

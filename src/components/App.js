import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" element={<NavBar/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/movies" element={<Movies/>}/>
          <Route exact path="/directors" element={<Directors/>}/>
          <Route exact path="/actors" element={<Actors/>}/>

      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;

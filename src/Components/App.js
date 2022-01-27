import '../Components.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import BookContainer from "./BookContainer";

function App() {
  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <BookContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
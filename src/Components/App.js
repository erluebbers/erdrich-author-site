import '../Components.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home";
import BookContainer from "./BookContainer";
import ReviewContainer from "./ReviewContainer"

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
        <Route exact path="/reviews">
          <ReviewContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
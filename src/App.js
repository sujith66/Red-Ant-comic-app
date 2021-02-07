import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Favourites from "./components/Favourites/Favourites";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/favourite">
            <Header />
            <Favourites />
            
          </Route>
          <Route path="/">
            <Header />
            <Home /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

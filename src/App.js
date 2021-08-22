import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/checkout">
            {/* Header */}
            <Header />
            {/* Home */}
            <p>Hello</p>
            <h1>Hello Header</h1>
          </Route>

          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>

        </Switch> 
      </div>
    </Router>
  );
}

export default App;

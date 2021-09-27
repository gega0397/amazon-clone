import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Signin from "./Signin";
import { auth } from "./firebase";
import { useStateValue } from './stateprovider'



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("User =>", authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/checkout">
          {/* Header */}
          <Header />
            {/* Home */}
            <Checkout /> 
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

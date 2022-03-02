import React, {useEffect} from 'react' 
import Home from "./pages/Home"; 
import Register from "./pages/Register";
import Login from "./pages/Login"; 


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; 
import { useSelector } from "react-redux";


const App = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
      </Switch>
    </Router> 
   
  );
};

export default App;
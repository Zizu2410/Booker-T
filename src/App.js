import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './screens/homeScreen/Home';
import { Cart } from "./components/screens/cartscreen/Cart";
import SignUp from "./components/screens/signupscreen/Signup";
import Login from "./components/screens/loginscreen/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Courses from './screens/coursesScreen/Courses';
import Teach from './screens/teachScreen/Teach';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/courses'>
                  <Courses />
              </Route>
              <Route path='/teach'>
                  <Teach />
              </Route>
              <Route path='/'>
                  <Home />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

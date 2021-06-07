import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './screens/homeScreen/Home';
import { Cart } from "./screens/cartscreen/Cart";
import SignUp from "./screens/signupscreen/Signup";
import Login from "./screens/loginscreen/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Courses from './screens/coursesScreen/Courses';
import Teach from './screens/teachScreen/Teach';
import SingleCourse from './screens/singleCourseScreen/SingleCourse';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/courses'>
                  <Courses />
              </Route>
              <Route path='/course/:c_id'>
                  <SingleCourse />
              </Route>
              <Route path='/teach'>
                  <Teach />
              </Route>
              <Route path='/cart'>
                  <Cart />
              </Route>
              <Route path='/login'>
                  <Login />
              </Route>
              <Route path='/signup'>
                  <SignUp />
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

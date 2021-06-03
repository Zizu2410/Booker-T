import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Featured from "./components/featured/Featured";
import SignUp from "./components/screens/signupscreen/Signup";
import Login from "./components/screens/loginscreen/Login";
import { Cart } from "./components/screens/cartscreen/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />

      {/* <Login /> */}
      {/* <SignUp /> */}

      {/* <Banner /> */}
      {/* <Featured /> */}
    </div>
  );
}

export default App;

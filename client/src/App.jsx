import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

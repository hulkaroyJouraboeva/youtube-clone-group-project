import React from "react";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from './Footer'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="Footer"> <Footer /> </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Comment from "./Comment";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Comment/>
        <Footer/>
            
      </div>

    );
  }
}

export default App;

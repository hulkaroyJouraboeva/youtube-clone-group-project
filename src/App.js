import React from "react";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./Footer";
import Video from "./components/Video";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/videos/:id`} element={<Video />} />
        </Routes>
        <Footer/>
      </div>

    );
  }
}

export default App;

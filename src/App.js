import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;

import React from "react"
import Home from "./components/Home";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    )
  }
}

export default App;
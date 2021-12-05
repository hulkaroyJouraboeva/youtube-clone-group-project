import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Nav from ".Components/Nav";
import Result from ".Components/Result"
import About from ".Components/About"
import Search from ".Components/Search"

class App extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  render(){
    return (
      <div className="App">
        <Nav/>
        <main>
          <Routes
            <Route exact path="/" element={
              //I FEEL AS IF THIS IS CODED CORRECTLY BUT THERE ARE RED LINES. PLEASE LOOK OVER FOR SYNTAX ERROR. 
              <>
              <Search/>
              <Result/>
              </>
            }
          />
           <Routes
            <Route exact path= "/video/:id" 
            //SAME ISSUE AS ABOVE
            element={
              <>
              <Search/>
              <Video/>
              </>
            }
          />
          <Route path="/about/" element ={<About/>}/>
        </main>
      </div>
    )
  }
}


export default App;

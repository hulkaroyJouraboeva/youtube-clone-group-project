import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";

/*import Nav from "./Nav";
//import Result from "./Result"
import About from "./About"
import Search from "./Search" */

class App extends React.Component{
  constructor(){
    super();
    this.state ={}
  }
  render(){
    return (
      <div className="App">
        {/* <Nav/>
        <main>
         
          <Routes/>
            <Route exact path="/" element={
              <>
              <Search/>
              <Result/>
              </>
            }
          />
           <Routes/>
            <Route exact path= "/video/:id" 
          
            element={
              <>
              <Search/>
              <Video/>
              </>
            }
            />
         <Routes/>
          <Route path="/about/" element ={<About/>}/>
        
        </main> */}
      </div>
    )
  }
}


export default App;

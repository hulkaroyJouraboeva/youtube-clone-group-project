import React from "react";
import SearchBar from "./SearchBar.js";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Home"> 
                <SearchBar />
            </div>
        )
    }
}

export default Home;
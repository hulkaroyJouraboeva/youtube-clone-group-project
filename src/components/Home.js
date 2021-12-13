import React from "react";
import SearchBar from "./SearchBar.js";
import './Home.css';
import { Routes, Route } from 'react-router-dom';
import Video from "./Video.js";

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
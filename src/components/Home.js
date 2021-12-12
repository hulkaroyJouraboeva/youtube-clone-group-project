import React from "react";
import SearchBar from "./SearchBar.js";
import './Home.css';
import Thumbnail from "./Thumbnail.js";
import { Routes, Route } from 'react-router-dom';
import Video from "./Video.js";

class Home extends React.Component {
    constructor() {
        super();
        this.state = { submitted: false, data: [] }}

    isSubmitted = (bool, data) => {
        this.setState({ submitted: bool, data })}

    render() {
        return (
            <div className="Home"> 
                <SearchBar isSubmitted={this.isSubmitted} />
                
                {this.state.submitted                   
                ? <Thumbnail data={this.state.data} />
                : <p>No Search Results Yet! Please submit a search above</p>}
            </div>
        )
    }
}

export default Home;
{/* ( if {this.state.submitted}) {
    <div>
        <Thumbnail data={YTdata} />
        <Routes>
            <Route path={`/videos/${YTdata.items.map((item) => item.id.videoId)}`} element={<Video videoId={YTdata.items.map((item) => item.id.videoId)} />} />
        </Routes>
    </div>
} */}
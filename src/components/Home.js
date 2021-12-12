import React from "react";
import SearchBar from "./SearchBar.js";
import './Home.css';
import Thumbnail from "./Thumbnail.js";

class Home extends React.Component {
    constructor() {
        super();
        this.state = { submitted: false, data: [] }
    }

    isSubmitted = (bool, data) => {
        this.setState({ 
            submitted: bool,
            data: data  
        })
    }

    render() {
        return (
            <div className="Home"> 
                <SearchBar isSubmitted={this.isSubmitted} />
                <div>
                    {this.state.submitted ? 
                    <Thumbnail data={this.state.data} /> 
                    : 'No Search Results Yet! Please submit a search above :)'}
                </div>
            </div>
        )
    }
}

export default Home;
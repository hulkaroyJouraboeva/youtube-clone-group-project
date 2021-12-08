import React from "react";
import SearchBar from "./SearchBar.js";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }

    componentDidMount() {
    }
    
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

export default Home;
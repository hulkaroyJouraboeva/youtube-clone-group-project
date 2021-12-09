import React from 'react';
import Thumbnail from './Thumbnail';

class SearchBar extends React.Component {
    // state to hold userInput and submitted
    constructor() {
        super();
        this.state = {
            userInput: '',
            submitted: false,
        }
    }

    // method to handle submit
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            userInput: event.target.searchbar.value,
            submitted: true,
        })

        event.target.searchbar.value = '';

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&type=video&q=${this.state.userInput}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.log(error);
                throw error;
            })
    } 

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='type here' name='searchbar' required />
                    <button type='submit' value='search'>Search</button>
                </form>
                {/* {this.state.submitted ? <Thumbnail /> : 'No Search Results Yet! Please submit a search above :)'} */}
            </div>
        )
    }
}

export default SearchBar;
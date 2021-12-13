import React from 'react';
import Thumbnail from './Thumbnail';
import './Home.css';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { 
            userInput: '',
            submitted: false,
            data: [] 
        }
    }

    handleChange = (event) => this.setState({userInput: event.target.value})
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&type=video&q=${this.state.userInput}`)
        .then((response) => response.json())
        .then((YTdata) => {
            this.setState({
                submitted: true,
                data: YTdata 
            })
        })
        .catch((error) => {
            throw error;
        })
        event.target.searchbar.value = '';
    }

    render() {
        return (
            <div className='SearchBar'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='type here' name='searchbar' onChange={this.handleChange} required />
                    <button type='submit'>Search</button>
                </form>

                {this.state.submitted                   
                ? <Thumbnail data={this.state.data} />
                : <p>No Search Results Yet! Please submit a search above</p>}
            </div>
        )
    }
}

export default SearchBar;
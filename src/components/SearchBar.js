import React from 'react';
import Thumbnail from './Thumbnail';
import './Home.css';

// - What does it do?
// - What was interesting to you in the code?
// - What was a challenge you overcame?
// - How did you overcome it?
// - What's next for the feature/app?

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            submitted: false,
            data: [],
        }
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }
    
    handleSubmit = (event) => {
        console.log(this.state.userInput)
        event.preventDefault();
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&type=video&q=${this.state.userInput}`)
        .then((response) => response.json())
        .then((YTdata) => {
            console.log(YTdata)
            this.setState({ 
                data: YTdata,
                submitted: true
            })
            event.target.searchbar.value = '';
        })
        .catch((error) => {
            throw error;
        })
    }

    render() {
        return (
            <div className='SearchBar'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='type here' name='searchbar' onChange={this.handleChange} required />
                    <button type='submit'>Search</button>
                </form>
                <div>{this.state.submitted ? <Thumbnail data={this.state.data} /> : 'No Search Results Yet! Please submit a search above :)'}</div>
            </div>
        )
    }
}

export default SearchBar;
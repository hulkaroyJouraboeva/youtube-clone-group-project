import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }

    handleSubmit = (event) => {
        this.setState({
            userInput: event.value
        })
        console.log(this.state.userInput)
    } 

    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='type here' required></input>
                    <button type='submit' onSubmit={this.handleSubmit}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
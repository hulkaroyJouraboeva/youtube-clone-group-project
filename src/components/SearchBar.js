import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='type here'></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
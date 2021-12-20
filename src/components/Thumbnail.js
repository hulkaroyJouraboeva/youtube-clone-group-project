import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Thumbnail extends React.Component {
    render() {
        return ( 
            <div className="Thumbnail">
            {this.props.data.items.map((item) => {
                return (
                    <div>
                        <img src={item.snippet.thumbnails.high.url} alt='video thumbnail' key={item.id.videoId} />
                        <Link to={`/videos/${item.id.videoId}`}> <p>{item.snippet.title}</p> </Link>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Thumbnail;
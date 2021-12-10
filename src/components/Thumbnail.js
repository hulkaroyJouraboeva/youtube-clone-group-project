import React from "react";
import './Home.css';

class Thumbnail extends React.Component {
    
    render() {
        return ( 
            <div className="Thumbnail">
            { this.props.data.items.map((item) => {
                return (
                    <div>
                        <img src={item.snippet.thumbnails.high.url} alt='video thumbnail' key={item.id.videoId} />
                        <p>{item.snippet.title}</p> 
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Thumbnail;

// {/* <Link to={`/videos/${item.id.videoId}`} className="link-title">
// {item.snippet.title}
// </Link> */}

// {/* <img 
// src={console.log(this.props.data.items.map((item) => item.snippet.thumbnails.default.url))} 
// alt='Video Thumbnail'
// height='300'
// width='500' /> */}
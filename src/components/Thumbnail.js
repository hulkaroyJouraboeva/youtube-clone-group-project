import React from "react";

class Thumbnail extends React.Component {
    
    render() {
        return ( 
            <div className="Thumbnail">
            { this.props.data.items.map((item) => <img src={item.snippet.thumbnails.high.url} alt='video thumbnail' key={item.id.videoId} /> ) }
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
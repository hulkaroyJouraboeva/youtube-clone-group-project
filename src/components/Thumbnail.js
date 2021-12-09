import React from "react";

class Thumbnail extends React.Component {

    handleThumbnail = () => {

    }

    render() {
        // console.log(this.props.data)
        return ( 
            <div>
                <img src={this.handleThumbnail} alt='Video Thumbnail' height='300' width='500' />

            </div>
        )
                    // {/* <Link to={`/videos/${item.id.videoId}`} className="link-title">
                    // {item.snippet.title}
                    // </Link> */}
    }
}

export default Thumbnail;
import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import Comment from '../Comment';

class Video extends React.Component {
    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        <Comment/>
        const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0
        }
        };
        
        console.log(this.props.videoId)
        return <YouTube videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
    }

}

export default Video;
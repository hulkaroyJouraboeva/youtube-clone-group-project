import React from 'react';
import YouTube from 'react-youtube';
import Comment from '../Comment';
import { useParams } from  'react-router-dom';

const _onReady = (event) => {
    event.target.pauseVideo();
}

const Video = () => {
    const { id } = useParams();
    return (
        <div>
            <YouTube videoId={id} onReady={_onReady} />;
            <Comment />
        </div>
    )

}

export default Video;
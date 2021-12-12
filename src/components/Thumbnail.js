import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Home.css';
import Video from './Video';

class Thumbnail extends React.Component {
    render() {
        return ( 
            <div className="Thumbnail">
            {this.props.data.items.map((item) => {
                return (
                    <div>
                        <img src={item.snippet.thumbnails.high.url} alt='video thumbnail' key={item.id.videoId} />
                        <Link to={`/videos/${item.id.videoId}`}> <p>{item.snippet.title}</p> </Link>

                        <Routes>
                            <Route path={`/videos/${item.id.videoId}`} element={<Video videoId={item.id.videoId}/>} />
                        </Routes>
                    </div>
                )
            })}
            </div>
        )
    }
}


export default Thumbnail;
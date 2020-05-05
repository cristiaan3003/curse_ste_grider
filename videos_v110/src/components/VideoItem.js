import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelectedItem})=>{

        return (
            <div className= 'video-item item' onClick={() => onVideoSelectedItem(video)}>
                <img 
                className= 'ui image' 
                src= {video.snippet.thumbnails.medium.url}
                alt= {video.snippet.title}
                />
                <div className='content'>
                    <div className='header'> {video.snippet.title}</div>

                </div>
                
            </div>

        );
}

export default VideoItem;
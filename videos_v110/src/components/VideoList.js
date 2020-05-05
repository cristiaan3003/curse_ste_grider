import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, returnVideoSelected}) =>{
    const renderedList = videos.map( video =>{
                return <VideoItem onVideoSelectedItem={returnVideoSelected} key={video.id.videoId} video={video}/>
    });
    return <div className='ui relaxed divided list'> {renderedList}</div>;
};

export default VideoList;
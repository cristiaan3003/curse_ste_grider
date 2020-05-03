import React from 'react';
import VideoItem from './VideoItem'


export default class VideoList extends React.Component{

    render(){
        return (
            <div>
                video List
                <VideoItem></VideoItem>
            </div>
        );
    }
}
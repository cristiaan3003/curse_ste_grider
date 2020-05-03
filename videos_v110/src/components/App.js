import React from 'react';

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

export default class App extends React.Component{

    render(){
        return(
            <div>
                <SearchBar></SearchBar>
                <VideoDetail></VideoDetail>
                <VideoList></VideoList>
            </div>
        );
    }
}

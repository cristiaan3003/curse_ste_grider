import React from 'react';

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import youtube from '../apis/youtube'


const KEY='AIzaSyAeE0F8-oVggzBIkbaMe7ZKtNqtnvrJF0Y';


export default class App extends React.Component{

    state ={videos : [], selectedVideo: null};

    //CALLBACK method
    onSearchSubmit = async (textSearch) =>{ 
        const response = await youtube.get('/search',{
            params: {                
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
                q: textSearch
            }

        });
        this.setState({videos: response.data.items,
        selectedVideo : response.data.items[0]});
        //console.log(response);
    };

    onVideoSelected = (videoSelected) =>{
        this.setState({selectedVideo : videoSelected});
        console.log('from app ', videoSelected);
    }

    componentDidMount(){
        this.onSearchSubmit('aviones');
    }



    render(){
        return(
            <div className='ui container'>
                <SearchBar runWhenUserSearch={this.onSearchSubmit}></SearchBar>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail videoSelected={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList returnVideoSelected={this.onVideoSelected} 
                            videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

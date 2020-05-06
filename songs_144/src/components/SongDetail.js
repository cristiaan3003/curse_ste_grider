import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) =>{
    if(!song){
        return (<div>Selected Song</div>);
    }
    return (<div> 
                <h3>Detail for:</h3>
                <p>
                Title: {song.title}
                <br/>
                Durection: {song.duration}
                </p>
            </div>);
}

const mapToStateToProps = (state) =>{
    return {song : state.selectedSong};
}

export default connect(mapToStateToProps)(SongDetail);
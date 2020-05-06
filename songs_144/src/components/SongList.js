import React from 'react';
import {connect} from 'react-redux';

class SongList extends React.Component{

    renderList = () =>{
        return this.props.songs.map( (song) => {
               return( <div key={song.title} className='item'>
                            <div className='right floated content'>
                                <button className='ui button primary'> Select</button>
                            </div>
                            <div className='content'>{song.title}</div>
                        </div>
               );

        }

        );
    }

    render(){
        return (
        <div className='ui divided list'>{this.renderList()}</div>
        );
    }
}


const mapStateToProps = (state) =>{
    console.log(state);

    return {songs: state.songs};

    return state;

}

export default connect(mapStateToProps)(SongList);
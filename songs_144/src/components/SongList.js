import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component{

    renderList = () =>{
        //console.log('renderList');
        //console.log(this.props);
        return this.props.songs.map( (song) => {
               return( <div key={song.title} className='item'>
                            <div className='right floated content'>
                                <button className='ui button primary'
                                onClick={() => this.props.selectSong(song)}> Select</button>
                            </div>
                            <div className='content'>{song.title}</div>
                        </div>
               );

        }

        );
    }

    render(){
        //console.log('this.props');
        //console.log(this.props);
        return (
        <div className='ui divided list'>{this.renderList()}</div>
        );
    }
}
const mapStateToProps = state =>{
    //console.log('mapStateToProps')
    //console.log(state);
    return {songs: state.songs};

}
export default connect(mapStateToProps,{selectSong : selectSong})(SongList);
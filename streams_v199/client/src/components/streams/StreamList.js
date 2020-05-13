import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchStreams} from '../../actions'

class StreamList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin = (stream) =>{
        if(stream.userId===this.props.currentUserId){
            return (
                <div className='right floated content'>
                    <Link to={`/stream/edit/${stream.id}`} className='ui button primary'>
                      Edit
                  </Link>
                  <Link to={`/stream/delete/${stream.id}`} className='ui button delete'>
                      Delete
                  </Link>
                </div>
            );
        }
    }

    renderList = () =>{
        return this.props.streams.map((stream) =>{
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera'/>
                    <div className='content'>
                        {stream.title}
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            );
        })
    }

    renderCreate = () =>{
        if(this.props.isSignedIn){
            return(
              <div style={{textAlign: 'right'}}>
                  <Link to='/stream/new' className='ui button primary'>
                      Create Stream
                  </Link>
              </div>  
            );
        }
    }
    render(){ 
        //console.log(this.props.streams);       
        return (
            <React.Fragment>
                <div>
                    <h2>Streams</h2>
                    <div className='ui celled list'>
                    {this.renderList()}
                    </div>
                    {this.renderCreate()}
                </div>
            </React.Fragment>
        );   }
}

const mapToStateToPros = (state) =>{
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn};
}

export default connect(mapToStateToPros,{
    fetchStreams
})(StreamList);
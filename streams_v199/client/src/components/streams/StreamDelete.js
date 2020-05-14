import React from 'react';
import Modal from '../Modal'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'
import {Link} from 'react-router-dom'
import history from '../../history'




class StreamDelete extends React.Component{

    componentDidMount(){
        //console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions(){        
            return(
                <React.Fragment>
                    <button className="ui primary button">Delete</button>
                    <Link to='/' className="ui button">Cancel</Link>
                </React.Fragment>
            );
    }
    

    render(){
        console.log(this.props);
    if (!this.props.stream){
        return <div>Loading!!</div>
    }
    return (
            <Modal
            onClick={this.props.deleteStream(this.props.match.params.id)}
            title='Delete Stream'
            content= {`Are you shure to delete stream? ${this.props.stream.title}`}
            actions= {this.renderActions()}
            onDismiss= {()=>history.push('/')}
            />
    );
    }
}

const mapToStateToPros = (state, ownProps) =>{
    //console.log('mapToState');
    //console.log(state);
    return {stream: state.streams[ownProps.match.params.id]};
}
export default connect(mapToStateToPros,{
    fetchStream,
    deleteStream
})(StreamDelete);
import React from 'react';
import Modal from '../Modal'
import {connect} from 'react-redux'
import {fetchStream, deleteStream} from '../../actions'
import {Link} from 'react-router-dom'
import history from '../../history'
// rederAction onclick see: https://stackoverflow.com/questions/39715182/difference-of-bind-to-arrow-function-usage-in-react



class StreamDelete extends React.Component{

    componentDidMount(){
        //console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }

    constructor(props){
        super(props);
        this.deleteStream = (id) => this.props.deleteStream.bind(this,id);
    }

    renderActions(){        
    return(
            <React.Fragment>
            <button 
            //two solution for "onClick" event call to deleteStream
            onClick={this.deleteStream((this.props.match.params.id))} // bind
            //onClick={ () => this.props.deleteStream((this.props.match.params.id))} // OK
            //onClick={ this.props.deleteStream((this.props.match.params.id))}//NO:exec every render auto
            className="ui primary button">Delete</button>
            <Link to='/' className="ui button">Cancel</Link>
        </React.Fragment>
    );
    }
    

    renderContent(){
        if (!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete stream: ${this.props.stream.title}`
    }
    
    render(){
        console.log(this.props);
    
    
    return (
            <Modal
            title='Delete Stream'
            content= {this.renderContent()}
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
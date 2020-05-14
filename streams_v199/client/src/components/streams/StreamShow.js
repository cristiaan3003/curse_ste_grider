import React from 'react';
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'

class StreamShow extends React.Component{

    componentDidMount(){
        //console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }
    render(){
        console.log(this.props);
        if(!this.props.stream){
            return <div>Loading!!</div>;
        }
        const {title, description} = this.props.stream;
        return (
            <React.Fragment>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </React.Fragment>
        );
    }
}

const mapToStateToProps= (state,ownProps)=>{
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapToStateToProps,{
    fetchStream})
    (StreamShow);
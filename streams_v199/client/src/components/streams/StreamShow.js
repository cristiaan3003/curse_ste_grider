import React from 'react';
import flv from 'flv.js'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'

class StreamShow extends React.Component{

    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount(){
        //console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    componentDidUpdate(){
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.player.destroy();
    }

    buildPlayer(){
        if(this.player || !this.props.stream){
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    render(){
        console.log(this.props);
        if(!this.props.stream){
            return <div>Loading!!</div>;
        }
        const {title, description} = this.props.stream;
        return (
            <React.Fragment>
                <video ref={this.videoRef} style={{with: '100%'}}  controls ></video>
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
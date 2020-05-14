import React from 'react';
import Modal from '../Modal'
import history from '../../history'




class StreamDelete extends React.Component{

    renderActions(){        
            return(
                <React.Fragment>
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </React.Fragment>
            );
    }
    

    render(){
    return (
        <React.Fragment>
            <div>StreamDelete</div>
            <Modal
            title='Delete Stream'
            content= 'Are you shure to delete stream?'
            actions= {this.renderActions()}
            onDismiss= {()=>history.push('/')}
            ></Modal>
        </React.Fragment>
    );
    }
}

export default StreamDelete;
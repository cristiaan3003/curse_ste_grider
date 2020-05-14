import React from 'react';
import Modal from '../Modal'
import history from '../../history'


const actions = (
    <React.Fragment>
        <button className="ui primary button">Delete</button>
        <button className="ui button">Cancel</button>
    </React.Fragment>
);

const StreamDelete = () =>{
    return (
        <React.Fragment>
            <div>StreamDelete</div>
            <Modal
            title='Delete Stream'
            content= 'Are you shure to delete stream?'
            actions= {actions}
            onDismiss= {()=>history.push('/')}
            ></Modal>
        </React.Fragment>
    );
};

export default StreamDelete;
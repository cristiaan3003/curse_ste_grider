import React from 'react';
import {connect} from 'react-redux';
class UserHeader extends React.Component{
    render(){
        const user = this.props;
        //console.log('user');
        //console.log(user);
        //if (users.length){
        //    const user =  this.props.users.find(user => user.id === this.props.userId);
            if (!this.props){
                return null;
            }
            return (
                <div>
                    user id : {this.props.id}
                    user name : {this.props.name}
                </div>
            );

        //}
        //return <div> Loaging Users data!!</div>
    }
}

const mapToStateToProps = (state, ownProps) =>{
    return {user: state.users.find(user =>user.id === ownProps.userId)}
};


export default connect(mapToStateToProps)(UserHeader);
import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);//call to action with "user id" (after componenet mount)
    }
    
    render(){
        const user = this.props;
        console.log('user');
        console.log(user);
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


export default connect(mapToStateToProps,{
        fetchUser : fetchUser})(UserHeader);
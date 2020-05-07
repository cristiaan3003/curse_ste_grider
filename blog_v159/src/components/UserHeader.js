import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);//call to action with "user id" (after componenet mount)
    }
    
    render(){
        return (
            <div>
                UserHeader id: {this.props.userId}
            </div>
        );
    }
}

const mapToStateToProps = (state) =>{
    return {user: state.user}
};


export default connect(mapToStateToProps,{
        fetchUser : fetchUser})(UserHeader);
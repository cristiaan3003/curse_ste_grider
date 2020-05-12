import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';


class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '976152491179-mlf05qtqli73u8codclfs8slej37qkd9.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
                //this.setState({isSignedIn: this.auth.isSignedIn.get(this.onAuthChange)});
            });
        });
        //then(()=>{          this.auth= window.gapi.auth2.getAuthInstance();
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());//v.226-> for recording userId: this.auth.currentUser().get().getId()
            //action_creator recibe id function "signIn"
        }else{
            this.props.signOut();
        }
    }

    onSignIn = () =>{
        this.auth.signIn();
    }

    onSingOut = () =>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return null;
        }else if (this.props.isSignedIn){
            return (
                <button className='ui red google button' onClick={this.onSingOut}>
                    <i className='google icon'/>
                    Sign Out
                </button>
            );
        }else{
            return (
                <button className='ui red google button' onClick={this.onSignIn}>
                    <i className='google icon'/>
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
            return <div>{this.renderAuthButton()}</div>;
    }
}

const mapToStateToProps = (state) =>{
    //console.log(this.auth);
    return { isSignedIn: state.auth.isSignedIn}
};
export default connect(mapToStateToProps,{signIn,signOut})(GoogleAuth);